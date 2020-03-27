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
                    <q-form @submit.prevent.stop="onSubmit">
                        <q-list class="detail-list" separator>
                            <q-item class="detail-field">
                                <span class="field-label">First Name</span>
                                <q-input
                                    class="field-value"
                                    v-model="profile.fname"
                                    type="text"
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    placeholder="Field required"
                                    lazy-rules
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        val => val !== null && val.length <= 256
                                    ]"
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
                                    hide-bottom-space
                                    placeholder="Field required"
                                    lazy-rules
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        val => val !== null && val.length <= 256
                                    ]"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Status</span>
                                <q-toggle
                                    v-model="profile.active"
                                    checked-icon="check"
                                    color="green-4"
                                    unchecked-icon="clear"
                                    :label="
                                        profile.active ? 'Active' : 'Inactive'
                                    "
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
                                <span class="field-label">Approval Status</span>
                                <q-toggle
                                    v-model="profile.approved"
                                    checked-icon="check"
                                    color="green-4"
                                    unchecked-icon="clear"
                                    :label="
                                        profile.approved
                                            ? 'Approved'
                                            : 'For Approval'
                                    "
                                />
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Save"
                                type="submit"
                                color="primary"
                                :loading="loading_p"
                                :disable="loading_p"
                            >
                                <template v-slot:loading>
                                    <q-spinner-gears />
                                </template>
                            </q-btn>
                        </div>
                    </q-form>
                </div>
            </div>

            <div class="content-2">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="local_shipping"
                        class="caption-icon q-mx-md"
                    />Contact Info and Delivery Address
                </div>
                <div>
                    <q-form @submit.prevent.stop="onSubmitC">
                        <q-list class="detail-list" separator>
                            <q-item class="detail-field">
                                <span class="field-label">Email</span>
                                <q-input
                                    class="field-value"
                                    v-model="profile.email"
                                    type="email"
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    placeholder="Valid email required. "
                                    lazy-rules
                                    :rules="[
                                        val =>
                                            (val && val.length > 0) ||
                                            'Please type your email',
                                        _isValidEmail
                                    ]"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Address</span>
                                <q-input
                                    class="field-value"
                                    v-model="profile.address"
                                    type="text"
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    lazy-rules
                                    :rules="[
                                        val => val !== null && val.length <= 512
                                    ]"
                                />
                            </q-item>

                            <q-item class="detail-field">
                                <span class="field-label">Phone</span>
                                <q-input
                                    class="field-value"
                                    v-model="profile.phone"
                                    type="tel"
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    placeholder="Ex. (+63) 000-000-0000"
                                    mask="(+##) ###-###-####"
                                    lazy-rules
                                    :rules="[_isValidPhoneNum]"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Phone Verified</span>
                                <q-toggle
                                    v-model="profile.smsVerified"
                                    checked-icon="check"
                                    color="green-4"
                                    unchecked-icon="clear"
                                    :label="
                                        profile.smsVerified
                                            ? 'Confirmed'
                                            : 'Unconfirmed'
                                    "
                                />
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Save"
                                type="submit"
                                color="primary"
                                :loading="loading_c"
                                :disable="loading_c"
                            >
                                <template v-slot:loading>
                                    <q-spinner-gears />
                                </template>
                            </q-btn>
                        </div>
                    </q-form>
                </div>
            </div>
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

<style lang="scss">
.q-field__bottom {
    display: none;
}
</style>
<script>
import HelperMixin from "../../mixins/helpers";

export default {
    preFetch({ store, currentRoute, previousRoute }) {
        console.log("prefetch!");
    },

    name: "AccountsEdit",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Review Account",
            meta: {
                robots: { name: "robots", content: "noindex" }
            }
        };
    },
    computed: {
        resolvedPhone() {
            const val = this.profile.phone;
            if (val !== "") {
                // +63 1234567890 E.164 Mobile Number format
                return val.replace(new RegExp(/[-()]/g), "");
            }
            return val;
        }
    },
    data() {
        return {
            loading_p: false,
            loading_c: false,
            profile: {
                active: true,
                fname: "Noel",
                lname: "Ochoa",
                type: "Reseller",
                approved: false,
                address: "",
                email: "email1234@pop.com",
                phone: "+99 8098880001",
                smsVerified: true
            }
        };
    },
    methods: {
        _isValidEmail(val) {
            const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || "Invalid email format";
        },
        _isValidPhoneNum(val) {
            if (!val) return true;

            const mobilePattern = /^\+\d{1,3}\s\d{1,14}(\s\d{1,13})?/;
            return (
                mobilePattern.test(this.resolvedPhone) ||
                "Invalid mobile phone format"
            );
        },
        onSubmit: function(evt) {
            /**TODO */
            this.loading_p = true;
            setTimeout(() => {
                this.showNotif(true, "Successfully updated account details.");
                this.loading_p = false;
            }, 2500);
        },
        onSubmitC: function(evt) {
            /**TODO */
            this.loading_c = true;
            setTimeout(() => {
                this.showNotif(true, "Successfully updated contact info.");
                this.loading_c = false;
            }, 2500);
        }
    }
};
</script>
