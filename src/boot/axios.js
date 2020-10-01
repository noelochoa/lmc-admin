import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export default ({ app, store, redirect }) => {
    let instance = axios.create({
        baseURL: process.env.API
    });

    instance.interceptors.request.use(
        config => {
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
            if (error.config.url == process.env.API + "/api/users/refresh") {
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

    app.axios = instance;
    store.$axios = instance;
};
