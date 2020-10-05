export default class Dashboard {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getCustomerStats() {
        const ret = { hasError: false, data: {} };
        try {
            const res = await this.axios.get("/api/customers/stats");
            ret.data = res.data;
        } catch (err) {
            ret.hasError = true;
        }
        return ret;
    }

    async getProductStats() {
        const ret = { hasError: false, data: {} };
        try {
            const res = await this.axios.get("/api/products/stats");
            ret.data = res.data;
        } catch (err) {
            ret.hasError = true;
        }

        return ret;
    }

    async getOrderStats() {
        const ret = { hasError: false, data: {} };
        try {
            const res = await this.axios.get("/api/orders/stats");
            ret.data = res.data;
        } catch (err) {
            ret.hasError = true;
        }

        return ret;
    }

    async getPendingResellers() {
        const ret = { hasError: false, data: [] };
        try {
            const res = await this.axios.get("/api/customers/pending");
            ret.data = res.data;
        } catch (err) {
            ret.hasError = true;
        }
        return ret;
    }
}
