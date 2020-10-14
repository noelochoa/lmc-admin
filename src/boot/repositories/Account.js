const moment = require("moment");

export default class Account {
    axios = void 0;

    constructor(axios) {
        this.axios = axios;
    }

    async getAllAccounts(filter) {
        try {
            let ret = [],
                res;
            if (filter) {
                res = await this.axios.get("/api/customers", {
                    params: {
                        type: filter
                    }
                });
            } else {
                res = await this.axios.get("/api/customers");
            }
            res.data.forEach(item => {
                ret.push({
                    id: item.id,
                    name: item.name,
                    joined: moment(item.created).format("MMM DD, YYYY"),
                    login: item.login
                        ? moment(item.login).format("MMM DD, YYYY")
                        : "-",
                    type: item.accountType,
                    active: item.status.isActive
                });
                return item;
            });

            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async getAccount(paramID) {
        try {
            let ret = {};
            const res = await this.axios.get(`api/customers/${paramID}`);
            ret.type = res.data.accountType;
            ret.email = res.data.email;
            ret.address = res.data.address;
            ret.fname = res.data.firstname;
            ret.lname = res.data.lastname;
            ret.active = res.data.status.isActive;
            ret.approved = res.data.status.isResellerApproved;
            ret.smsVerified = res.data.status.isSMSVerified;
            ret.phone = res.data.phonenumber;
            return ret;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async editAccount(paramID, { fname, lname, active, approved }) {
        try {
            await this.axios.patch(`api/customers/${paramID}`, [
                { property: "firstname", value: fname },
                { property: "lastname", value: lname },
                { property: "status.isActive", value: active },
                { property: "status.isResellerApproved", value: approved }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }

    async editAccountContact(paramID, { address, phone, smsVerified }) {
        try {
            await this.axios.patch(`api/customers/${paramID}`, [
                {
                    property: "address",
                    value: !!address ? address.trim() : null
                },
                {
                    property: "phonenumber",
                    value: !!phone ? phone.trim() : null
                },
                { property: "status.isSMSVerified", value: smsVerified }
            ]);
            return true;
        } catch (err) {
            throw err.response.data.error || "Error has occurred.";
        }
    }
}
