import axios from "axios";

export default ({ app, store, redirect }) => {
    let instance = axios.create({
        baseURL: process.env.API
    });

    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                store.dispatch("auth/resetAuth");
                redirect("/login");
            }
            return Promise.reject(error);
        }
    );

    app.axios = instance;
    store.$axios = instance;
};
