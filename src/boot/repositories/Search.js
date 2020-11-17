export default class Search {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async findItems(text) {
        try {
            if (text) {
                const res = await this.axios.get("/api/search", {
                    params: { search: text }
                });
                return res.data;
            }
            return [];
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
