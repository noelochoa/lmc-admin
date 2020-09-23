import axios from "axios";

export default ({ store, Vue, redirect }) => {
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
                redirect({ path: "/login" });
            }
            throw error;
        }
    );

    Vue.prototype.$axios = instance;
    store.$axios = instance;
};
