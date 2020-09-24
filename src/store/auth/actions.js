export function setAuthenticated({ commit }, bool) {
    commit("SET_BOOL_AUTH", bool);
}

export function setName({ commit }, name) {
    commit("SET_NAME_AUTH", name);
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
            console.log(this.jwt);
            if (this.jwt) {
                this.jwt.token = resp.data.token;
                this.jwt.expiry = new Date(Date.now() + 300); // 5min
            }
            commit("SET_NAME_AUTH", resp.data.cmsuser.name);
            commit("SET_BOOL_AUTH", true);
        }
    } catch (err) {
        throw err.response.data.error || "Invalid email or password.";
    }
}

export async function signout({ commit }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/logout", {
            headers: { Authorization: `Bearer ${this.jwt.token}` }
        });
        if (resp) {
            console.log(this.jwt);
            commit("RESET_AUTH");
            this.jwt = {};
        }
    } catch (err) {
        throw err.response.data.error || "Error has occurred.";
    }
}
