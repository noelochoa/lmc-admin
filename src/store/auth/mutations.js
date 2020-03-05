export function SET_BOOL_AUTH(state, bool) {
    state.authenticated = bool;
}

export function SET_JWT_AUTH(state, jwt) {
    state.jwt = jwt;
}

export function SET_NAME_AUTH(state, name) {
    state.name = name;
}
