<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Review Account</h6>
                <br />
                <p>
                    You may check and configure the customer's account details.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Profile Info
                </div>
                <div>
                    <q-list class="detail-list">
                        <q-item class="detail-field">
                            <span class="field-label">First Name</span>
                            <q-input
                                class="field-value"
                                v-model="profile.fname"
                                type="text"
                                dense
                                outlined
                                dark
                            />
                        </q-item>
                        <q-item class="detail-field">
                            <span class="field-label">Last Name</span>
                            <q-input
                                class="field-value"
                                v-model="profile.lname"
                                type="text"
                                dense
                                outlined
                                dark
                            />
                        </q-item>
                        <q-item class="detail-field">
                            <span class="field-label">Active</span>
                            <q-toggle
                                v-model="profile.active"
                                checked-icon="check"
                                color="primary"
                                unchecked-icon="clear"
                            />
                        </q-item>

                        <q-item class="detail-field">
                            <span class="field-label">Account Type</span>
                            {{ profile.type }}
                        </q-item>
                        <q-item
                            class="detail-field"
                            v-show="profile.type === 'Reseller'"
                        >
                            <span class="field-label">Account Status</span>
                            <q-toggle
                                v-model="profile.approved"
                                checked-icon="check"
                                color="primary"
                                :label="
                                    profile.approved
                                        ? 'Approved'
                                        : 'For Approval'
                                "
                                unchecked-icon="clear"
                            />
                        </q-item>
                    </q-list>
                </div>
            </div>

            <div class="content-2"></div>
        </div>
    </q-page>
</template>
<style lang="scss" scoped>
.page-heading,
.page-contents {
    display: grid;
}
.page-contents {
    grid-template-columns: minmax(240px, 480px);
    grid-template-rows: auto;
    grid-template-areas:
        "content-1"
        "content-2";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
}
.content-2 {
    grid-area: content-2;
}
div[class*="content-"] {
    display: flex;
    flex-direction: column;
}
div[class*="content-"] > div {
    min-height: 4em;
    justify-content: left;
    margin: 1px 0;
    background: rgba(128, 128, 128, 0.65);
    width: 100%;
}
.caption-icon {
    font-size: 2.5rem;
    display: inline-flex;
}
.detail-list {
    display: flex;
    flex-direction: column;
}
.detail-field {
    align-items: center;
}
.detail-field .field-label {
    width: 140px;
}
.detail-field .field-value {
    flex: 1;
}

@media (max-width: 400px) {
    .detail-field {
        flex-direction: column;
        align-items: flex-start;
    }
    .detail-field .field-label,
    .detail-field .field-value {
        line-height: 2em;
        width: 100%;
    }
}
</style>
<script>
export default {
    preFetch({ store, currentRoute, previousRoute }) {
        console.log("prefetch!");
    },

    name: "AccountsEdit",
    meta() {
        return {
            title: "Review Account"
        };
    },
    data() {
        return {
            profile: {
                active: true,
                fname: "Noel",
                lname: "Ochoa",
                type: "Regular",
                approved: false
            }
        };
    }
};
</script>
