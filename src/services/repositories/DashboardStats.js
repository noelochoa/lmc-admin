import axiosInstance from "axios";
const resource = "/customers";

export default {
    getCustomersCount() {
        let retCount = 0;
        try {
            // const res = await axiosInstance.get(`${resource}`);
            // console.log(res);
            retCount = 123;
        } catch (err) {
            retCount = 0;
        }
        return retCount;
    },

    getResellersCount() {
        return 545;
        //return axiosInstance.get(`${resource}`);
    }
};
