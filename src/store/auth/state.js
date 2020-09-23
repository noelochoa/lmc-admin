export function getInitialState() {
    return {
        authenticated: false,
        name: ""
    };
}

const state = getInitialState();

export default function() {
    return state;
}
