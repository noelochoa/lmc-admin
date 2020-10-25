const moment = require("moment");

export default class Order {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getOrderStats(date) {
        try {
            let ret = [];
            let params = {};
            if (date && date instanceof Date) {
                params.year = date.getFullYear();
                params.month = date.getMonth() + 1;
            }
            const res = await this.axios.get("/api/orders/stats", {
                params: params
            });
            for (const [key, value] of Object.entries(res.data)) {
                ret.push({ name: key, count: value });
            }
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getOrders(date, status) {
        try {
            let res,
                ret = [];
            let params = {};
            if (date && date instanceof Date) {
                params.year = date.getFullYear();
                params.month = date.getMonth() + 1;
            }
            if (status) {
                params.status = status;
            }

            res = await this.axios.get("/api/orders/cms", {
                params: params
            });
            res.data.forEach(item => {
                ret.push({
                    ordernum: item._id,
                    status: item.status[0].status,
                    class: item.status[0].status
                        .replace(/\s/g, "-")
                        .toLowerCase(),
                    target: moment(item.target).format("MMM DD, YYYY HH:mm"),
                    customer:
                        item.customer[0].fname + " " + item.customer[0].lname,
                    total: item.total
                });
            });
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async placeOrder(order) {
        try {
            await this.axios.post("/api/orders/cms", {
                ...order
            });
            return true;
        } catch (err) {
            console.log(err);
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
