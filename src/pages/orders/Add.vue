<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Add Order</h6>
                <br />
                <p>
                    Fill out the form to manually place an order.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Order Info
                </div>
                <div>
                    <q-form @submit.prevent.stop="onSubmit">
                        <q-list class="detail-list" separator>
                            <q-item class="detail-field">
                                <span class="field-label">Target Date</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    class="field-value"
                                    v-model="order.target"
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
                                                    v-model="order.target"
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
                                                    v-model="order.target"
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
                                <span class="field-label">Delivery Type</span>
                                <q-select
                                    class="field-value"
                                    v-model="order.type"
                                    :options="deliveryTypes"
                                    dark
                                    dense
                                    outlined
                                    hide-bottom-space
                                    options-dense
                                    emit-value
                                    map-options
                                    lazy-rules
                                    :rules="[_isValidType]"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Customer</span>
                                <q-select
                                    class="field-value customer-select"
                                    v-model="order.customer"
                                    :options="options"
                                    hide-dropdown-icon
                                    hide-bottom-space
                                    dark
                                    dense
                                    options-dense
                                    outlined
                                    use-input
                                    @filter="filterFn"
                                    emit-value
                                    map-options
                                    lazy-rules
                                    :rules="[val => val !== null]"
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="close"
                                            @click.stop="order.customer = null"
                                            class="cursor-pointer"
                                        />
                                    </template>
                                    <template v-slot:no-option>
                                        <q-item>
                                            <q-item-section
                                                class="text-italic text-grey"
                                            >
                                                No customer account found.
                                            </q-item-section>
                                        </q-item>
                                    </template>
                                </q-select>
                            </q-item>
                            <transition name="fade">
                                <q-item
                                    class="detail-field"
                                    v-if="order.type == 1"
                                >
                                    <span class="field-label">Address</span>
                                    <q-input
                                        dense
                                        outlined
                                        dark
                                        hide-bottom-space
                                        class="field-value"
                                        v-model="order.address"
                                        lazy-rules
                                        :rules="[
                                            val =>
                                                val !== null &&
                                                val.trim() !== ''
                                        ]"
                                    />
                                </q-item>
                            </transition>
                            <q-item class="detail-field product-field">
                                <span class="field-label">
                                    Products
                                </span>
                                <div class="product-details q-py-sm">
                                    <q-item
                                        class="product-item"
                                        v-for="(product, idx) in order.products"
                                        :key="'key-' + idx"
                                    >
                                        <q-item-section side>
                                            <q-avatar rounded size="64px">
                                                <img
                                                    src="https://cdn.quasar.dev/img/avatar.png"
                                                />
                                                <q-badge
                                                    floating
                                                    color="teal"
                                                    class="q-pt-xs"
                                                >
                                                    {{ product.quantity }}
                                                </q-badge>
                                            </q-avatar>
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="product-name">
                                                {{ product.name }}
                                            </q-item-label>
                                            <q-item-label
                                                caption
                                                class="text-grey-4 product-name"
                                            >
                                                <span
                                                    v-for="opt in product.options"
                                                    :key="'key-' + opt._option"
                                                >
                                                    {{
                                                        opt._option +
                                                            ": " +
                                                            opt._selected
                                                    }}
                                                    <span
                                                        v-if="
                                                            opt.otherValue !=
                                                                null
                                                        "
                                                        >({{
                                                            opt.otherValue
                                                        }}) </span
                                                    ><br />
                                                </span>
                                            </q-item-label>
                                        </q-item-section>
                                        <q-item-section side class="text-white">
                                            {{ product.price }} PHP
                                        </q-item-section>
                                        <q-item-section
                                            side
                                            caption
                                            class="text-white"
                                        >
                                            <q-btn
                                                flat
                                                dense
                                                rounded
                                                class="ml-auto"
                                                icon="clear"
                                                @click="removeProduct(idx)"
                                                :disabled="showProductAdd"
                                            >
                                                <q-tooltip>
                                                    Remove Product
                                                </q-tooltip>
                                            </q-btn>
                                        </q-item-section>
                                    </q-item>
                                    <q-btn
                                        dense
                                        flat
                                        no-caps
                                        icon="add"
                                        label="Add Product"
                                        :disabled="showProductAdd"
                                    />
                                </div>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Total Price</span>
                                {{ order.total }} PHP
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Add"
                                type="submit"
                                color="primary"
                                :loading="loading"
                                :disable="loading"
                            >
                                <template v-slot:loading>
                                    <q-spinner-gears />
                                </template>
                            </q-btn>
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
    grid-template-columns: minmax(360px, 720px);
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
    min-width: 140px;
    width: 140px;
}
.detail-field .field-value {
    flex: 1;
}
.product-details {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
}
.product-details > button {
    align-self: flex-start;
}
.product-item {
    border: 1px solid #fff;
}
.product-name {
    overflow: hidden;
    text-overflow: ellipsis;
    width: inherit;
}

@media (max-width: 580px) {
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

@media (max-width: 810px) {
    .product-field {
        flex-direction: column;
        align-items: flex-start;
    }
    .product-field .product-details {
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
    name: "OrderAdd",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Add Order"
        };
    },
    created() {},
    mounted() {},
    computed: {},
    data() {
        return {
            showProductAdd: false,
            loading: false,
            hasTyped: false,
            order: {
                products: [
                    {
                        id: 12334553,
                        name: "product 1",
                        quantity: 2,
                        price: 200.0,
                        options: [
                            { _option: "color", _selected: "red" },
                            { _option: "theme", _selected: "mario" }
                        ]
                    },
                    {
                        id: 12334552,
                        name: "product 2product 2product 2product 2",
                        quantity: 5,
                        price: 1200.0,
                        options: []
                    },
                    {
                        id: 12334556,
                        name: "product 3",
                        quantity: 1,
                        price: 200.0,
                        options: [
                            { _option: "color", _selected: "red" },
                            {
                                _option: "theme",
                                _selected: "Other",
                                otherValue: "DMC 5"
                            }
                        ]
                    }
                ],
                total: 12333.01,
                customer: null,
                target: null,
                address: "",
                type: 1
            },
            deliveryTypes: [
                {
                    label: "For Delivery",
                    value: 1
                },
                {
                    label: "For Pickup",
                    value: 2
                }
            ],
            customerList: [
                {
                    label: "John1",
                    value: 1
                },
                {
                    label: "Mary",
                    value: 2
                },
                {
                    label: "Twitter",
                    value: 3
                },
                {
                    label: "Apple",
                    value: 4
                },
                {
                    label: "Oracle",
                    value: 5
                }
            ],
            options: null
        };
    },
    methods: {
        _isValidType(val) {
            if (
                !(
                    this.order.type &&
                    this.deliveryTypes &&
                    this.deliveryTypes.length > 0
                )
            ) {
                return "Invalid type selected";
            }

            const typeItem = this.deliveryTypes.find(option => {
                return option.value === this.order.type;
            });

            if (!typeItem) return "Invalid type selected";

            return true;
        },

        _isValidDatetime(val) {
            const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
            return dtpattern.test(val) || "Invalid date & time format";
        },

        filterFn(val, update, abort) {
            /**TODO */
            if (!val || val.trim() == "") {
                abort();
                return;
            }

            update(() => {
                const needle = val.toLowerCase();
                this.options = this.customerList.filter(
                    v => v.label.toLowerCase().indexOf(needle) > -1
                );
            });
        },
        removeProduct(productKey) {
            console.log(productKey);
            this.$delete(this.order.products, productKey);
        },
        onSubmit: function(evt) {
            /**TODO */
            this.loading = true;

            setTimeout(() => {
                this.showNotif(true, "Successfully added new order. ");
                this.loading = false;
                this.returnToPageIndex("/orders");
            }, 2500);
        }
    }
};
</script>
