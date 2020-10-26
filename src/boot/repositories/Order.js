const moment = require("moment");

export default class Order {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getStatusSelection() {
        // Order Status
        try {
            let ret = [];
            const res = await this.axios.get("/api/orders/statlist");
            res.data.forEach(item => {
                ret.push({
                    value: item._id,
                    label:
                        item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)
                });
            });
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getOrderStats(date) {
        try {
            let ret = [],
                total = 0;
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
                total += value;
            }
            ret.unshift({ name: "all", count: total });
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
                params.status = status.toLowerCase();
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
                    type: item.deliveryType ? item.deliveryType : "-",
                    total: item.total
                });
            });
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getOrder(paramID) {
        try {
            const res = await this.axios.get(`api/orders/cms/${paramID}`);
            res.data.target = moment(res.data.target).format(
                "YYYY-MM-DD HH:mm"
            );
            res.data.type = res.data.deliveryType;

            // Selected products
            res.data.products.forEach(item => {
                item.name = item.product.name;
                item.image =
                    item.product.images && item.product.images.length > 0
                        ? item.product.images[0].image
                        : "";
            });
            return res.data;
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
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
