export function getInitialState() {
    return {
        authenticated: false,
        name: "",
        xsrf: ""
    };
}

const state = getInitialState();

export default function() {
    return state;
}
