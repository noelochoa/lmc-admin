export function SET_PRODUCT_INFO(state, info) {
    state.product = { ...state.product, ...info };
}

export function SET_PRODUCT_IMAGES(state, imgs) {
    state.product.images = imgs;
}

export function SET_PRODUCT_OPTIONS(state, options) {
    state.product.options = options;
}
