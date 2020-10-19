export function getInitialState() {
    return {
        ongoing: false,
        product: {
            id: 0,
            name: "",
            category: null,
            basePrice: 0,
            minOrderQuantity: 0,
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
