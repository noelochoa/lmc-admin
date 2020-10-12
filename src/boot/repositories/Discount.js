const moment = require("moment");

export default class Discount {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getAllDiscounts() {
        try {
            const res = await this.axios.get("/api/discounts/all");
            res.data.map(item => {
                item.start = moment(item.start).format("MMM DD, YYYY HH:mm");
                item.end = moment(item.end).format("MMM DD, YYYY HH:mm");
                return item;
            });
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getDiscount(paramID) {
        try {
            const res = await this.axios.get(`api/discounts/${paramID}`);
            res.data.start = moment(res.data.start).format("YYYY-MM-DD HH:mm");
            res.data.end = moment(res.data.end).format("YYYY-MM-DD HH:mm");
            res.data.target =
                res.data.target.charAt(0).toUpperCase() +
                res.data.target.slice(1);
            res.data.value = res.data.percent;
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async addDiscount({ start, end, products, value, target }) {
        try {
            await this.axios.post("/api/discounts", {
                start,
                end,
                percent: value,
                target: target.toLowerCase(),
                products
            });
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async editDiscount(paramID, { start, end, products, value, target }) {
        try {
            await this.axios.patch(`api/discounts/${paramID}`, [
                { property: "start", value: start },
                { property: "end", value: end },
                { property: "target", value: target.toLowerCase() },
                { property: "percent", value: value },
                { property: "products", value: products }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async deleteDiscount(paramID) {
        try {
            await this.axios.delete(`api/discounts/${paramID}`);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
