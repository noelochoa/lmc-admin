import axios from "axios";

export default ({ app, store, redirect }) => {
    let instance = axios.create({
        baseURL: process.env.API
    });

    instance.interceptors.request.use(
        config => {
            if (store.state.auth.authenticated) {
                const xsrf = store.getters["auth/getXSRFToken"];
                config.headers["X-CSRF-TOKEN"] = xsrf;
            } else {
                delete config.headers["X-CSRF-TOKEN"];
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
            if (error.response.status === 401) {
                store.dispatch("auth/resetAuth");
                //redirect("/login");
            }
            return Promise.reject(error);
        }
    );

    app.axios = instance;
    store.$axios = instance;
};
