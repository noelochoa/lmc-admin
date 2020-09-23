import { getInitialState } from "./state";

export function SET_BOOL_AUTH(state, bool) {
    state.authenticated = bool;
}

export function SET_NAME_AUTH(state, name) {
    state.name = name;
}

export function RESET_AUTH(state) {
    Object.assign(state, getInitialState());
}
