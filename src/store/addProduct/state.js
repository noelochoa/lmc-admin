export function getInitialState() {
    return {
        product: {
            name: "",
            category: null,
            basePrice: 1,
            minOrderQuantity: 1,
            description: "",
            colors: null,
            details: null,
            options: null,
            images: null
        }
    };
}

const state = getInitialState();

export default function() {
    return state;
}
