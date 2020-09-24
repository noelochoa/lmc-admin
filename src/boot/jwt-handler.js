export class _JWT {
    token = null;
    expiry = null;

    reset() {
        this.token = null;
        this.expiry = null;
    }
    isExpired() {
        return this.expiry - Date.now() < 0;
    }
}

export default async ({ store }) => {
    const oJWT = new _JWT();
    store.jwt = oJWT;
};
