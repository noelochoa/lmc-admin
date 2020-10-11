const moment = require("moment");

export default class Category {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getAllCategories() {
        try {
            const res = await this.axios.get("/api/categories/all");
            res.data.map(item => {
                item.created = item.created
                    ? moment(item.created).format("MMMM DD, YYYY")
                    : "-";
            });
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getCategory(paramID) {
        const ret = { hasError: false, data: {} };
        try {
            const res = await this.axios.get(`api/categories/${paramID}`);
            ret.data = res.data;
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async addCategory({ name }) {
        try {
            const res = await this.axios.post("/api/categories", {
                name
            });
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async editCategory(paramID, { name }) {
        try {
            const res = await this.axios.patch(`api/categories/${paramID}`, [
                { property: "name", value: name }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async deleteCategory(paramID) {
        try {
            const res = await this.axios.delete(`api/categories/${paramID}`);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
