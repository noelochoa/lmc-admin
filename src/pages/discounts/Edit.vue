<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Edit Discount Rule</h6>
                <br />
                <p>You may edit the following product discount entry.</p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Discount Details
                </div>
                <div>
                    <q-form
                        @submit.prevent.stop="onSubmit"
                        :disabled="discount.hasError || discount.loading"
                    >
                        <q-item class="q-mt-sm" v-if="discount.loading">
                            <q-spinner color="white" size="2em" />
                        </q-item>
                        <q-list class="detail-list" separator v-else>
                            <q-item class="detail-field">
                                <span class="field-label">Starts from</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    class="field-value"
                                    v-model="discount.data.start"
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        _isValidDatetime
                                    ]"
                                >
                                    <template v-slot:prepend>
                                        <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qDateProxyS"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-date
                                                    dark
                                                    no-unset
                                                    v-model="
                                                        discount.data.start
                                                    "
                                                    mask="YYYY-MM-DD HH:mm"
                                                    @input="
                                                        () =>
                                                            $refs.qDateProxyS.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>

                                    <template v-slot:append>
                                        <q-icon
                                            name="access_time"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qTimeProxyS"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-time
                                                    dark
                                                    v-model="
                                                        discount.data.start
                                                    "
                                                    mask="YYYY-MM-DD HH:mm"
                                                    format24h
                                                    @input="
                                                        () =>
                                                            $refs.qTimeProxyS.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Ends at</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    class="field-value"
                                    v-model="discount.data.end"
                                    lazy-rules
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        _isValidDatetime,
                                        _isValidEndDt
                                    ]"
                                >
                                    <template v-slot:prepend>
                                        <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qDateProxyE"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-date
                                                    dark
                                                    no-unset
                                                    v-model="discount.data.end"
                                                    mask="YYYY-MM-DD HH:mm"
                                                    @input="
                                                        () =>
                                                            $refs.qDateProxyE.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>

                                    <template v-slot:append>
                                        <q-icon
                                            name="access_time"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qTimeProxyE"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-time
                                                    dark
                                                    v-model="discount.data.end"
                                                    mask="YYYY-MM-DD HH:mm"
                                                    format24h
                                                    @input="
                                                        () =>
                                                            $refs.qTimeProxyE.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Target Customer</span>
                                <q-select
                                    class="field-value"
                                    v-model="discount.data.target"
                                    :options="targets"
                                    @input="hasSelect = true"
                                    dark
                                    dense
                                    outlined
                                    hide-bottom-space
                                    options-dense
                                    lazy-rules
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        val => targets.includes(val)
                                    ]"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="person_outline" />
                                    </template>
                                </q-select>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Discount (%)</span>
                                <q-slider
                                    class="field-value q-mx-xs"
                                    v-model="discount.data.value"
                                    :min="1"
                                    :max="99"
                                    label
                                    color="green-4"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Apply to</span>
                                <q-select
                                    class="products-select field-value"
                                    v-model="discount.data.products"
                                    :options="options"
                                    label="Products"
                                    hide-dropdown-icon
                                    hide-bottom-space
                                    dark
                                    dense
                                    outlined
                                    multiple
                                    use-chips
                                    use-input
                                    @filter="filterFn"
                                    emit-value
                                    map-options
                                    lazy-rules
                                    :rules="[
                                        val => val !== null && val.length > 0
                                    ]"
                                >
                                    <template v-slot:no-option>
                                        <q-item>
                                            <q-item-section
                                                class="text-italic text-grey"
                                            >
                                                No products found.
                                            </q-item-section>
                                        </q-item>
                                    </template>
                                </q-select>
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Save"
                                type="submit"
                                color="primary"
                                :loading="loading"
                                :disable="loading || !hasSelect"
                            >
                                <template v-slot:loading>
                                    <q-spinner-gears />
                                </template>
                            </q-btn>
                            {{ discount.products }}
                        </div>
                    </q-form>
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
    grid-template-columns: minmax(240px, 560px);
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
    max-width: 388px;
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
.q-chip__content {
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
}
.products-select .q-field__control-container {
    min-height: 5rem;
}

.q-field__bottom {
    display: none;
}
</style>
<script>
import HelperMixin from "../../mixins/helpers";
let Discount = null,
    Product = null;

export default {
    name: "DiscountEdit",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Edit Discount Rule"
        };
    },
    created() {
        // this.options = this.productsList;
        if (process.env.CLIENT) {
            this.getProducts();
            this.getDiscount();
        }
    },
    beforeCreate() {
        Discount = this.$RepositoryFactory.get("discounts");
        Product = this.$RepositoryFactory.get("products");
    },
    data() {
        return {
            loading: false,
            hasSelect: true,
            targets: ["All", "Regular", "Reseller", "Partner"],
            options: null,
            productsList: [],
            discount: {
                loading: true,
                hasError: false,
                data: {
                    value: 0,
                    name: "",
                    products: [],
                    start: "",
                    end: ""
                }
            }
        };
    },
    methods: {
        _isValidDatetime(val) {
            const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
            return dtpattern.test(val) || "Invalid date & time format";
        },
        _isValidEndDt(val) {
            const end = new Date(val);
            const start = new Date(this.discount.data.start);
            return (
                end.getTime() > start.getTime() ||
                "End date needs to be greater"
            );
        },

        filterFn(val, update, abort) {
            if (!val || val.trim() == "") {
                abort();
                return;
            }

            update(() => {
                const needle = val.toLowerCase();
                this.options = this.productsList.filter(
                    v => v.label.toLowerCase().indexOf(needle) > -1
                );
            });
        },

        async getProducts() {
            Product.getProductSelection()
                .then(dat => {
                    this.productsList = dat;
                    this.options = this.productsList.slice();
                })
                .catch(err => {
                    this.productsList = [];
                    this.options = [];
                });
        },

        async getDiscount() {
            try {
                const resp = await Discount.getDiscount(this.$route.params.id);
                this.discount.data = resp;
            } catch (err) {
                this.showNotif(false, "Could not retrieve discount details. ");
                this.discount.hasError = true;
            } finally {
                this.discount.loading = false;
            }
        },

        onSubmit: async function(evt) {
            this.loading = true;
            try {
                await Discount.editDiscount(
                    this.$route.params.id,
                    this.discount.data
                );
                this.showNotif(true, "Successfully updated discount info.");
                this.loading = false;
                this.returnToPageIndex("/discounts");
            } catch (err) {
                this.showNotif(false, "Could not edit discount info. ");
                this.loading = false;
            }
        }
    }
};
</script>
