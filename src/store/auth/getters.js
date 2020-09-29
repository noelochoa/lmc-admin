export function getName(state) {
    return state.name;
}

export function getXSRFToken(state) {
    return state.xsrf;
}

export function isAuthenticated(state) {
    return state.authenticated;
}
