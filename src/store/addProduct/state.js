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

export default function() {
    return getInitialState();
}
