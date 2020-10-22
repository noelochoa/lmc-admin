const moment = require("moment");

export default class Product {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getProductSelection() {
        try {
            let ret = [];
            const res = await this.axios.get("/api/products/cms");
            res.data.products.forEach(item => {
                ret.push({ value: item._id, label: item.name });
            });
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getProducts(category = "all") {
        try {
            let res;
            if (category) {
                const catFilter = category.toLocaleLowerCase();
                res = await this.axios.get(`/api/products/cms/${catFilter}`);
            } else {
                res = await this.axios.get(`/api/products/cms`);
            }
            res.data.products.forEach(item => {
                item.created = item.created
                    ? moment(item.created).format("MMM DD, YYYY")
                    : "-";
                item.toggleFlg = item.isActive;
            });
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getProduct(paramID) {
        try {
            const res = await this.axios.get(
                `api/products/cms/item/${paramID}`
            );
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async createProduct(product) {
        try {
            const res = await this.axios.post("/api/products", {
                ...product
            });
            //Return ID
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async updateProduct(paramID, product) {
        try {
            let props = [];
            Object.entries(product).forEach(([key, value]) => {
                if (key != "id") props.push({ property: key, value: value });
            });
            await this.axios.patch(`api/products/${paramID}`, [...props]);
            //Return ID
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async uploadImgs(paramID, formdat) {
        try {
            const res = await this.axios.patch(
                `api/products/images/${paramID}`,
                formdat,
                {
                    "Content-Type": "multipart/form-data"
                }
            );
            //Return ID
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async uploadBanner(paramID, formdat) {
        try {
            const res = await this.axios.patch(
                `api/products/banner/${paramID}`,
                formdat,
                {
                    "Content-Type": "multipart/form-data"
                }
            );
            //Return ID
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async deleteImage(paramID, pimgID) {
        try {
            await this.axios.delete(`api/products/images/${paramID}/${pimgID}`);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async toggleActiveProduct(paramID, bool) {
        try {
            await this.axios.patch(`api/products/${paramID}`, [
                { property: "isActive", value: bool }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async toggleAll(paramIDs, bool) {
        try {
            if (paramIDs && paramIDs.length > 0) {
                await this.axios.patch("api/products/multi", {
                    selected: paramIDs,
                    props: [{ property: "isActive", value: bool }]
                });
                return true;
            } else {
                return Promise.reject("None selected.");
            }
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
