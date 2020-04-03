export function setProductInfo({ commit }, info) {
    console.log("ACTION setProductInfo", info);
    commit("SET_PRODUCT_INFO", info);
}

export function setProductImages({ commit }, imglist) {
    console.log("ACTION setProductImages", imglist);
    commit("SET_PRODUCT_IMAGES", imglist);
}

export function setProductOptions({ commit }, options) {
    console.log("ACTION setProductOptions", options);
    commit("SET_PRODUCT_OPTIONS", options);
}
