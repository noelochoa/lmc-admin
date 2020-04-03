import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import addProduct from "./addProduct";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default async function({ ssrContext }) {
    const Store = await new Vuex.Store({
        modules: {
            auth,
            addProduct
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    });
    return Store;
}
