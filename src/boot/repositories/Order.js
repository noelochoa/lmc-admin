const moment = require("moment");

export default class Order {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    __zeroPad(num, numZeros) {
        var n = Math.abs(num);
        if (isNaN(num)) n = 0;
        var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
        var zeroString = Math.pow(10, zeros)
            .toString()
            .substr(1);
        if (num < 0) {
            zeroString = "-" + zeroString;
        }
        return zeroString + n;
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
                const dt = moment(item.target);
                ret.push({
                    id: item._id,
                    ordernum:
                        "OR" +
                        dt.format("YY") +
                        "-" +
                        this.__zeroPad(item.ordernum, 6),
                    status: item.status[0].status,
                    class: item.status[0].status
                        .replace(/\s/g, "-")
                        .toLowerCase(),
                    target: dt.format("MMM DD, YYYY HH:mm"),
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
            const dt = moment(res.data.target);
            res.data.ordernum =
                "OR" +
                dt.format("YY") +
                "-" +
                this.__zeroPad(res.data.ordernum, 6);
            res.data.target = dt.format("YYYY-MM-DD HH:mm");
            res.data.type = res.data.deliveryType;
            res.data.address = res.data.shippingAddress;
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

    async replaceOrder(order) {
        try {
            await this.axios.post("/api/orders/cms", {
                ...order
            });
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async updateOrder(paramID, { status, target, type, address, memo }) {
        try {
            await this.axios.patch(`api/orders/cms/${paramID}`, [
                { property: "status", value: status },
                { property: "target", value: target },
                { property: "deliveryType", value: type },
                { property: "shippingAddress", value: address },
                { property: "memo", value: memo }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
