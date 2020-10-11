const moment = require("moment");

export default class Comment {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getComments() {
        try {
            let ret = [];
            const res = await this.axios.get("/api/comments");
            res.data.forEach(item => {
                ret.push({
                    id: item.id,
                    posted: moment(item.created).format("MMM DD, YYYY"),
                    author: item.author ? item.author.name : "-",
                    product: item.product ? item.product.name : "-",
                    flagged: item.isFlagged,
                    text: item.comment
                });
                return item;
            });

            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getComment(paramID) {
        const ret = { hasError: false, data: {} };
        try {
            const res = await this.axios.get(`api/comments/${paramID}`);
            ret.data.text = res.data.comment;
            ret.data.posted = res.data.created;
            ret.data.author = res.data.author ? res.data.author.name : "-";
            ret.data.product = res.data.product ? res.data.product.name : "-";
            ret.data.reply = res.data.reply ? res.data.reply : "";
            ret.data.replyAuthor = res.data.replyAuthor;

            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async flagComment(paramID, bool) {
        try {
            const res = await this.axios.patch(`api/comments/${paramID}`, [
                { property: "isFlagged", value: bool }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async replyToComment(paramID, { reply, replyAuthor }) {
        try {
            const res = await this.axios.patch(`api/comments/${paramID}`, [
                { property: "replyAuthor", value: replyAuthor },
                { property: "reply", value: reply }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
