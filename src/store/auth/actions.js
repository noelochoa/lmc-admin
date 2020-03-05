export function setJWT({ commit }, jwt) {
    commit("SET_JWT_AUTH", jwt);
}

export function setAuthenticated({ commit }, bool) {
    commit("SET_BOOL_AUTH", bool);
}

export function setName({ commit }, name) {
    commit("SET_NAME_AUTH", name);
}
