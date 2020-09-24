export default async ({ app, store }) => {
    store.jwt = {
        token: null,
        expiry: null
    };
};
