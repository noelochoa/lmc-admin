import { Cookies } from "quasar";
import createPersistedState from "vuex-persistedstate";

export default async ({ store, ssrContext }) => {
    const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies;

    createPersistedState({
        paths: ["auth"],
        storage: {
            getItem: key => JSON.stringify(cookies.get(key)),
            setItem: (key, value) =>
                cookies.set(key, value, {
                    path: "/",
                    sameSite: "Lax",
                    secure: !process.env.DEV
                }),
            removeItem: key => cookies.remove(key)
        }
    })(store);
};
