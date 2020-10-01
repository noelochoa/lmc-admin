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
    } catch (err) {
        throw err.response.data.error || "Invalid email or password.";
    }
}

export async function signout({ commit }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/logout");
    } catch (err) {
        throw err.response.data.error || "Error has occurred.";
    } finally {
        commit("RESET_AUTH");
    }
}
