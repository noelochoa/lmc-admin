export function getinitialState() {
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

const state = getinitialState();

export default function() {
    return state;
}
