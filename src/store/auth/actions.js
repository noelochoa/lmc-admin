/*
export function setAuthenticated({ commit }, bool) {
    commit("SET_BOOL_AUTH", bool);
}

export function setName({ commit }, name) {
    commit("SET_NAME_AUTH", name);
}
*/

export function setXSRFToken({ commit }, xsrf) {
    commit("SET_XSRF_AUTH", xsrf);
}

export function resetAuth({ commit }) {
    commit("RESET_AUTH");
}

export async function signin({ commit }, { email, password }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/login", {
            email,
            password
        });
        if (resp && resp.data) {
            commit("SET_NAME_AUTH", resp.data.cmsuser.name);
            commit("SET_XSRF_AUTH", resp.data.xsrf);
            commit("SET_BOOL_AUTH", true);
        }
        return true;
    } catch (err) {
        throw err.response.data.error || "Invalid email or password.";
    }
}

export async function signout({ commit }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/logout");
        return true;
    } catch (err) {
        throw err.response.data.error || "Error has occurred.";
    } finally {
        commit("RESET_AUTH");
    }
}

export async function setName({ commit }, { name }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/edit", {
            name
        });
        commit("SET_NAME_AUTH", resp.data.name);
        return true;
    } catch (err) {
        throw err.response.data.error || "Error has occurred.";
    }
}

export async function changePW({ commit }, { prevpw, newpw, reppw }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/changepw", {
            prevpw,
            newpw,
            reppw
        });
        return true;
    } catch (err) {
        throw err.response.data.error || "Error has occurred.";
    }
}

export async function createUser({ commit }, { email, name, password }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users", {
            email,
            name,
            password
        });
        return true;
    } catch (err) {
        throw err.response.data.error || "Error has occurred.";
    }
}

/** TEST */
export async function getCustomerStats({ commit }) {
    let resp;
    try {
        resp = await this.$axios.get("/api/customers/stats");
        console.log(resp.data);
        return Promise.resolve(resp.data);
    } catch (err) {
        return Promise.resolve(err);
        //  throw err.response.data.error || "Error has occurred.";
    }
}
