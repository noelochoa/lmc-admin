const moment = require("moment");

export default class Announcement {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getAllAnnouncements() {
        try {
            const res = await this.axios.get("/api/psa/all");
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

    async getAnnouncement(paramID) {
        try {
            const res = await this.axios.get(`api/psa/${paramID}`);
            res.data.start = moment(res.data.start).format("YYYY-MM-DD HH:mm");
            res.data.end = moment(res.data.end).format("YYYY-MM-DD HH:mm");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async addAnnouncement({ start, end, message, targetLink }) {
        try {
            await this.axios.post("/api/psa", {
                start,
                end,
                message,
                targetLink
            });
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async editAnnouncement(paramID, { start, end, message, targetLink }) {
        try {
            await this.axios.patch(`api/psa/${paramID}`, [
                { property: "start", value: start },
                { property: "end", value: end },
                { property: "message", value: message },
                { property: "targetLink", value: targetLink }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async deleteAnnouncement(paramID) {
        try {
            await this.axios.delete(`api/psa/${paramID}`);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
