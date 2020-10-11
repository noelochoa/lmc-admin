export default class Product {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getProductSelection() {
        try {
            const res = await this.axios.get("/api/products/any");
            if (res.data.count > 0) {
                let ret = [];
                res.data.products.forEach(item => {
                    ret.push({ value: item._id, label: item.name });
                });
                return ret;
            } else {
                return [];
            }
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
