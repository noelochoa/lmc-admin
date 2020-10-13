const moment = require("moment");

export default class Holiday {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getBusinessHolidays(date) {
        try {
            let res;
            if (date) {
                const { year, month } = date;
                res = await this.axios.get("/api/invaliddates", {
                    params: {
                        year,
                        month
                    }
                });
            } else {
                res = await this.axios.get("/api/invaliddates");
            }
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getBusinessHoliday(paramID) {
        try {
            const res = await this.axios.get(`api/invaliddates/${paramID}`);
            res.data.start = moment(res.data.start).format("YYYY-MM-DD HH:mm");
            res.data.end = moment(res.data.end).format("YYYY-MM-DD HH:mm");
            return res.data;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async addHoliday({ start, end, reason }) {
        try {
            await this.axios.post("/api/invaliddates", {
                start,
                end,
                reason
            });
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async editHoliday(paramID, { start, end, reason }) {
        try {
            await this.axios.patch(`api/invaliddates/${paramID}`, [
                { property: "start", value: start },
                { property: "end", value: end },
                { property: "reason", value: reason }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async deleteHoliday(paramID) {
        try {
            await this.axios.delete(`api/invaliddates/${paramID}`);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
