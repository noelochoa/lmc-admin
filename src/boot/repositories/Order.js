const moment = require("moment");
const prefix = "OR";

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
                const dt = moment(item.target);
                ret.push({
                    id: item._id,
                    ordernum: item.orderRef,
                    status: item.status.status,
                    class: item.status.status.replace(/\s/g, "-").toLowerCase(),
                    target: dt.format("MMM DD, YYYY HH:mm"),
                    customer:
                        item.customer.firstname + " " + item.customer.lastname,
                    type: item.deliveryType ? item.deliveryType : "-",
                    total: item.total
                });
            });
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async findSimilarOrders(paramID, { target, status, customer, products }) {
        try {
            let ret = [];
            let prodOptions = [];
            let productList = [];

            prodOptions = products
                .map(prod => {
                    return prod.options.map(opt => opt._selected).join(" ");
                })
                .filter(Boolean)
                .join(" ");

            productList = products.map(prod => {
                return prod.product;
            });

            const res = await this.axios.post(`api/orders/similar/${paramID}`, {
                target,
                status,
                customer,
                options: prodOptions,
                products: productList
            });

            res.data.forEach(item => {
                const dt = moment(item.target);
                ret.push({
                    similarity: item.similarity,
                    id: item._id,
                    ordernum: item.orderRef,
                    status: item.status.status,
                    class: item.status.status.replace(/\s/g, "-").toLowerCase(),
                    target: dt.format("MMM DD, YYYY HH:mm"),
                    customer:
                        item.customer.firstname + " " + item.customer.lastname,
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
            res.data.ordernum = res.data.orderRef;
            res.data.target = dt.format("YYYY-MM-DD HH:mm");
            res.data.type = res.data.deliveryType;
            res.data.address = res.data.shippingAddress;
            if (res.data.replacedBy) {
                res.data.replacedBy = Object.assign({}, res.data.replacedBy, {
                    ordernum: res.data.orderRef
                });
            }
            // Selected products
            res.data.products.forEach(item => {
                item.name = item.product.name;
                item.discounts = item.product.discounts;
                item.image =
                    item.product.images && item.product.images.length > 0
                        ? item.product.images[0].image
                        : "";
                item.product = item.product._id;
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

    async replaceOrder(paramID, order) {
        try {
            let params = order;
            delete params._id;
            delete params.ordernum;
            await this.axios.patch(`api/orders/cms/replace/${paramID}`, {
                ...params
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
