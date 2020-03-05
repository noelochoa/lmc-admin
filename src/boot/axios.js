import Vue from "vue";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API
});

Vue.prototype.$axios = axiosInstance;

export { axiosInstance };
