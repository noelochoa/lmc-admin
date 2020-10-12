export default class Dashboard {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getCustomerStats() {
        try {
            const res = await this.axios.get("/api/customers/stats");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getProductStats() {
        try {
            const res = await this.axios.get("/api/products/stats");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getOrderStats() {
        try {
            const res = await this.axios.get("/api/orders/stats");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getPendingResellers() {
        try {
            const res = await this.axios.get("/api/customers/pending");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getRecentComments() {
        try {
            const res = await this.axios.get("/api/comments/recent");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getBusinessHolidays() {
        try {
            const res = await this.axios.get("/api/invaliddates");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
