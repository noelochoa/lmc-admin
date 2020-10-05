// import { Cookies } from "quasar";
import axios from "axios";
import inject from "./inject";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export default inject(async function({ app, store, ssrContext, redirect }) {
    const instance = axios.create({
        baseURL: process.env.API
    });

    instance.interceptors.request.use(
        config => {
            if (!!ssrContext) {
                config.headers = ssrContext.req.headers;
                // config.skipAuthRefresh = true;
            }
            if (store.state.auth.authenticated) {
                config.headers["x-csrf-token"] = store.state.auth.xsrf;
            } else {
                delete config.headers["x-csrf-token"];
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (
                error.response.status === 403 ||
                error.config.url == process.env.API + "/api/users/refresh"
            ) {
                store.dispatch("auth/resetAuth");
                redirect("/login");
            }
            return Promise.reject(error);
        }
    );

    const refreshAuthLogic = fReq =>
        instance.post("/api/users/refresh").then(resp => {
            // Renew Access Token & CSRF Token
            store.dispatch("auth/setXSRFToken", resp.data.xsrf);
            return Promise.resolve();
        });

    createAuthRefreshInterceptor(instance, refreshAuthLogic);
    // const refreshAuthLogicSSR = fReq =>
    //     instance.post("/api/users/refresh").then(resp => {
    //         const cookies = Cookies.parseSSR(ssrContext);
    //         // Renew Access Token & CSRF Token
    //         cookies.set("_JWT_CMS", resp.data.token, {
    //             path: "/",
    //             sameSite: "Strict",
    //             httpOnly: true,
    //             expires: 7,
    //             secure: process.env.PROD
    //         });
    //         store.dispatch("auth/setXSRFToken", resp.data.xsrf);
    //         return Promise.resolve();
    //     });
    // if (process.env.SERVER) {
    //     createAuthRefreshInterceptor(instance, refreshAuthLogicSSR);
    // } else {
    //     createAuthRefreshInterceptor(instance, refreshAuthLogic);
    // }

    return {
        axios: instance
    };
});
