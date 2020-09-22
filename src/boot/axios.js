import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API
});

export default ({ store, Vue }) => {
    Vue.prototype.$axios = axiosInstance;
    store.$axios = axiosInstance;
};
