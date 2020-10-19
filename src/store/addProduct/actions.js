export function setProductInfo({ commit }, info) {
    console.log("ACTION setProductInfo", info);
    commit("SET_PRODUCT_INFO", info);
    commit("SET_ONGOING", true);
}

export function setProductImages({ commit }, imglist) {
    console.log("ACTION setProductImages", imglist);
    commit("SET_PRODUCT_IMAGES", imglist);
    commit("SET_ONGOING", true);
}

export function setProductOptions({ commit }, options) {
    console.log("ACTION setProductOptions", options);
    commit("SET_PRODUCT_OPTIONS", options);
    commit("SET_ONGOING", true);
}

export function clearState({ commit }) {
    console.log("ACTION clearState");
    commit("RESET_PRODUCT");
    commit("SET_ONGOING", false);
}
