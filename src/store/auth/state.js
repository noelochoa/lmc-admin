export function getInitialState() {
    return {
        authenticated: false,
        name: "",
        xsrf: ""
    };
}

export default function() {
    return getInitialState();
}
