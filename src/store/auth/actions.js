export function setJWT({ commit }, jwt) {
    commit("SET_JWT_AUTH", jwt);
}

export function setAuthenticated({ commit }, bool) {
    commit("SET_BOOL_AUTH", bool);
}

export function setName({ commit }, name) {
    commit("SET_NAME_AUTH", name);
}

export async function singin({ commit }, { email, password }) {
    let resp;
    try {
        resp = await this.$axios.post("/api/users/login", {
            email,
            password
        });
        if (resp) {
            commit("SET_NAME_AUTH", resp.data.cmsuser.name);
            commit("SET_BOOL_AUTH", true);
        }
        return;
    } catch (err) {
        throw err.response.data.error || "Invalid email or password.";
    }
}
