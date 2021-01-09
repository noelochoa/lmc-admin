<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Order Invoice</h6>
                <br />
                <q-btn
                    dense
                    no-caps
                    color="primary"
                    class="print-btn q-py-xs q-px-sm"
                    icon="print"
                    label="Print Invoice"
                    @click="printWindow()"
                />
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="info" class="caption-icon q-mx-md" />Order#
                    {{ order.data.ordernum }} placed
                    <span v-if="!!order.data.created">{{
                        toHumanReadableDt(order.data.created)
                    }}</span>
                </div>
                <div>
                    <q-form
                        @submit.prevent.stop="onSubmit"
                        :disabled="
                            order.hasError || order.loading || isReplacedStatus
                        "
                    >
                        <q-item class="q-mt-sm" v-if="order.loading">
                            <q-spinner color="white" size="2em" />
                        </q-item>
                        <q-list class="detail-list" separator v-else>
                            <q-item class="detail-field">
                                <span class="field-label">Status</span>
                                <q-select
                                    class="field-value"
                                    v-model="order.data.status"
                                    :options="orderStatusList"
                                    readonly
                                    dark
                                    dense
                                    outlined
                                    hide-bottom-space
                                    hide-dropdown-icon
                                    emit-value
                                    map-options
                                />
                            </q-item>
                            <q-item
                                class="detail-field"
                                v-if="isReplacedStatus"
                            >
                                <span class="field-label">Replaced by:</span>
                                {{ order.data.replacedBy.ordernum }}
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Target Date</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    readonly
                                    class="field-value"
                                    v-model="order.data.target"
                                >
                                </q-input>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Delivery Type</span>
                                <q-select
                                    class="field-value"
                                    v-model="order.data.type"
                                    :options="deliveryTypes"
                                    dark
                                    dense
                                    outlined
                                    readonly
                                    hide-bottom-space
                                    hide-dropdown-icon
                                    emit-value
                                    map-options
                                />
                            </q-item>
                            <transition name="fade">
                                <q-item
                                    class="detail-field"
                                    v-if="order.data.type == 'delivery'"
                                >
                                    <span class="field-label">Address</span>
                                    <q-input
                                        dense
                                        type="textarea"
                                        :rows="3"
                                        textarea
                                        outlined
                                        dark
                                        readonly
                                        hide-bottom-space
                                        class="field-value"
                                        v-model="order.data.address"
                                    />
                                </q-item>
                            </transition>
                            <q-item class="detail-field">
                                <span class="field-label">
                                    Memo
                                </span>
                                <q-input
                                    type="textarea"
                                    :rows="3"
                                    textarea
                                    dense
                                    readonly
                                    outlined
                                    dark
                                    hide-bottom-space
                                    class="field-value"
                                    v-model="order.data.memo"
                                />
                            </q-item>
                            <q-item
                                class="detail-field"
                                :class="{
                                    'cursor-not-allowed bg-grey-8': !confirmEditProduct
                                }"
                            >
                                <span class="field-label">Customer</span>
                                <q-select
                                    :disabled="!confirmEditProduct"
                                    :class="{
                                        'no-pointer-events': !confirmEditProduct
                                    }"
                                    class="field-value customer-select"
                                    v-model="order.data.customer"
                                    :options="options"
                                    hide-dropdown-icon
                                    hide-bottom-space
                                    dark
                                    dense
                                    readonly
                                    options-dense
                                    outlined
                                    emit-value
                                    map-options
                                >
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

                            <q-item
                                class="detail-field product-field"
                                :class="{
                                    'cursor-not-allowed bg-grey-8': !confirmEditProduct
                                }"
                            >
                                <span class="field-label">
                                    Products
                                </span>
                                <div class="product-details q-py-sm">
                                    <q-item
                                        class="product-item"
                                        v-for="(product, idx) in order.data
                                            .products"
                                        :key="'product-' + idx"
                                    >
                                        <q-item-section side>
                                            <q-avatar rounded size="64px">
                                                <img
                                                    :src="
                                                        product.image
                                                            ? resolveAssetsUrl(
                                                                  product.image
                                                              )
                                                            : 'https://dummyimage.com/64x64/363636/ffffff.png&text=No+Img'
                                                    "
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
                                            <span v-if="product.discount > 0">
                                                <span class="text-strike">
                                                    {{ product.price }}
                                                </span>
                                                (-{{ product.discount }}%)<br />
                                                {{ product.finalPrice }} PHP
                                            </span>
                                            <span v-else
                                                >{{ product.price }} PHP
                                            </span>
                                        </q-item-section>
                                    </q-item>
                                </div>
                            </q-item>

                            <q-item class="detail-field">
                                <span class="field-label">Total Price</span>
                                {{ orderTotalPrice }} PHP
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md"></div>
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
    gap: 1em;
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
.productdlg-item {
    flex-wrap: wrap;
}
.productdlg-item > div {
    text-transform: capitalize;
}
div[class*="attr-"] {
    flex-basis: 100%;
}
.search-field {
    width: 100%;
}
.search-field {
    width: 100%;
    overflow: hidden;
    word-wrap: none;
    text-overflow: ellipsis;
}
.ctext- {
    &placed {
        color: $primary;
    }
    &accepted {
        color: $accepted;
    }
    &cancelled {
        color: $cancelled;
    }
    &replaced {
        color: $replaced;
    }
    &preparing {
        color: $preparing;
    }
    &finalizing {
        color: $finalizing;
    }
    &out-for-delivery {
        color: $out-for-delivery;
    }
    &ready-for-pickup {
        color: $ready-for-pickup;
    }
    &fulfilled {
        color: $fulfilled;
    }
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
.options-light {
    background: #fff !important;
}
.options-light .q-item__label {
    color: #000 !important;
}
@media (max-width: 1290px) {
    .similar-orders {
        background: #1a1d1a !important;
    }
}

@media print {
    .q-footer,
    .q-header,
    .q-drawer-container,
    .print-btn {
        display: none !important;
        height: 0px !important;
    }
    .q-page-container,
    .page-heading,
    .page-contents {
        margin: 0 !important;
        padding: 0 !important;
    }
    .page-contents * {
        color: #000 !important;
        font-size: 10pt !important;
    }

    html,
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
}
</style>
<script>
import HelperMixin from "../../mixins/helpers";
let Account = null,
    Product = null,
    Order = null;

export default {
    name: "OrderInvoice",
    mixins: [HelperMixin],
    watch: {
        $route(to, from) {
            if (to.path !== from.path) {
                this.getOrderDetails();
            }
        }
    },
    meta() {
        return {
            title: "Order Invoice"
        };
    },
    beforeCreate() {
        Account = this.$RepositoryFactory.get("accounts");
        Product = this.$RepositoryFactory.get("products");
        Order = this.$RepositoryFactory.get("orders");
    },
    created() {
        if (process.env.CLIENT) {
            this.getOrderStatuses();
            this.getAccounts();
        }
    },
    mounted() {
        this.getOrderDetails();
    },
    computed: {
        isReplacedStatus() {
            if (!this.orderStatuses || this.orderStatuses.length < 1)
                return false;
            return this.orderStatuses.some(
                item =>
                    item.value == this.order.data.status &&
                    item.label.toLowerCase() == "replaced"
            );
        },

        orderStatusList() {
            if (!this.isReplacedStatus) {
                return this.orderStatuses.filter(item => {
                    return item.label.toLowerCase() !== "replaced";
                });
            }
            return this.orderStatuses;
        },

        orderTotalPrice() {
            return this.order.data.products.length > 0
                ? this.order.data.products.reduce((total, item) => {
                      return (
                          total +
                          Number.parseInt(
                              item.finalPrice ? item.finalPrice : item.price
                          )
                      );
                  }, 0)
                : 0;
        },

        similarOrderList() {
            if (
                this.findingSimilar ||
                (this.similarOrders && this.similarOrders.length < 1)
            )
                return [];
            // return this.similarOrders.reduce((r, a) => {
            //     r[a.similarity] = r[a.similarity] || [];
            //     r[a.similarity].push(a);
            //     return r;
            // }, Object.create(null));
            return this.similarOrders;
        }
    },
    data() {
        return {
            right: false,
            loading: false,
            pfilterLoading: false,
            findingSimilar: false,
            showPicker: false,
            confirmEditProduct: false,
            order: {
                loading: true,
                hasError: false,
                data: {
                    ordernum: "",
                    products: [],
                    total: 0,
                    customer: null,
                    target: null,
                    address: "",
                    type: "delivery",
                    status: null
                }
            },
            orderBackup: {},
            orderStatuses: [],
            deliveryTypes: [
                {
                    label: "For Delivery",
                    value: "delivery"
                },
                {
                    label: "For Pickup",
                    value: "pickup"
                }
            ],
            customerList: [],
            options: null,
            productOptions: null,
            searchProduct: null,
            selectProduct: null,
            customizedProduct: {
                id: -1,
                name: "",
                image: "",
                quantity: 0,
                price: 0,
                discounts: [],
                options: [],
                otherVal: []
            },
            similarOrders: [
                // {
                //     ordernum: "507f1f77bcf86cd799439011",
                //     status: "Placed",
                //     target: "Feb 20, 2020",
                //     customer: "John",
                //     similarity: "Same product orders",
                //     total: 1000
                // },
                // {
                //     ordernum: 2,
                //     status: "Processing",
                //     target: "Feb 20, 2020",
                //     customer: "John",
                //     similarity: "Same target date",
                //     total: 3000
                // },
                // {
                //     ordernum: 1,
                //     status: "fulfilled",
                //     target: "Feb 20, 2020 10:30",
                //     customer: "AAAAAAA",
                //     total: 2000
                // },
                // {
                //     ordernum: 22,
                //     status: "Cancelled",
                //     target: "Feb 10, 2020 10:30",
                //     customer: "AAA",
                //     total: 200.5
                // }
            ]
        };
    },
    methods: {
        _isValidStatus(val) {
            if (
                !(
                    this.order.data.status &&
                    this.orderStatuses &&
                    this.orderStatuses.length > 0
                )
            ) {
                return "Invalid status selected";
            }

            const statusItem = this.orderStatuses.find(option => {
                return option.value === this.order.data.status;
            });

            if (!statusItem) return "Invalid status selected";

            return true;
        },
        _isValidType(val) {
            if (
                !(
                    this.order.data.type &&
                    this.deliveryTypes &&
                    this.deliveryTypes.length > 0
                )
            ) {
                return "Invalid type selected";
            }

            const typeItem = this.deliveryTypes.find(option => {
                return option.value === this.order.data.type;
            });

            if (!typeItem) return "Invalid type selected";

            return true;
        },

        _isValidDatetime(val) {
            const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
            return dtpattern.test(val) || "Invalid date & time format";
        },

        filterFn(val, update, abort) {
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

        async pfilterFn(val, update, abort) {
            if (!val || val.trim() == "") {
                abort();
                return;
            }

            try {
                this.pfilterLoading = true;
                const res = await Product.searchProducts(val);
                this.productList = res.products.slice();

                update(() => {
                    this.productOptions = this.productList.map(item => {
                        return { label: item.name, value: item.id };
                    });
                });
            } catch (err) {
                this.showNotif(false, "Error searching product/s." + err);
            } finally {
                this.pfilterLoading = false;
            }
        },

        onCloseDialog() {},
        finalizePrice() {
            // Check for discounts and update prices
            const accnt = this.customerList.find(item => {
                return item.value == this.order.data.customer;
            });
            if (!accnt) return;

            this.order.data.products.forEach(el => {
                const discount = el.discounts.filter(item => {
                    return item.target == accnt.type || item.target == "all";
                });
                if (discount && discount.length > 0) {
                    const maxDiscount = Math.max.apply(
                        Math,
                        discount.map(function(o) {
                            return o.percent;
                        })
                    );
                    const finalPrice = (
                        el.price -
                        (el.price * maxDiscount) / 100
                    ).toFixed(0);

                    // Update new price (discounted)
                    el.discount = maxDiscount;
                    el.finalPrice = finalPrice;
                }
            });
        },

        onSelCustomer(val) {
            this.finalizePrice();
        },

        onSelectProduct(val) {
            // On select from search results
            this.selectProduct = this.productList.find(item => {
                return item.id == val;
            });
            this.clearSelection();
            // Set item for cutomization
            this.customizedProduct.id = this.selectProduct.id;
            this.customizedProduct.name = this.selectProduct.name;
            this.customizedProduct.image =
                this.selectProduct.images &&
                this.selectProduct.images.length > 0
                    ? this.selectProduct.images[0].image
                    : null;
            this.customizedProduct.quantity = this.selectProduct.minOrderQuantity;
            this.customizedProduct.discounts = this.selectProduct.discount;
            this.calcCustomizationPrice();
        },

        removeProduct(productKey) {
            this.$delete(this.order.data.products, productKey);
        },

        openProductPicker(evt) {
            this.selectProduct = null;
            this.searchProduct = null;
            this.showPicker = true;
        },

        clearSelection() {
            this.customizedProduct.id = -1;
            this.customizedProduct.name = "";
            this.customizedProduct.image = "";
            this.customizedProduct.options = [];
            this.customizedProduct.discounts = [];
            this.customizedProduct.otherVal = [];
            this.customizedProduct.quantity = 0;
            this.customizedProduct.price = 0;
        },

        clearSelCustomer() {
            this.order.data.customer = null;
            this.order.data.products.forEach(item => {
                item.discount = 0;
                item.finalPrice = item.price;
            });
        },

        onChgQty(val) {
            this.calcCustomizationPrice();
        },

        onSelOption(val) {
            this.calcCustomizationPrice();
        },

        calcCustomizationPrice() {
            const reducer = (total, item) => total + item.value.price;
            this.customizedProduct.price =
                this.customizedProduct.quantity *
                this.customizedProduct.options.reduce(
                    reducer,
                    this.selectProduct.basePrice
                );
        },

        toSelOptions(key, obj) {
            // console.log(this.customizedProduct);
            if (obj) {
                return obj.map(item => {
                    return {
                        label:
                            item.value +
                            (item.price >= 0
                                ? `(+${item.price}  PHP)`
                                : `(${item.price} PHP)`),
                        value: item,
                        key: key
                    };
                });
            }
            return obj;
        },

        async getOrderDetails() {
            try {
                this.order.loading = true;
                const resp = await Order.getOrder(this.$route.params.id);
                this.order.data = { ...resp };
                this.orderBackup.customer = resp.customer; // make copy
                this.orderBackup.products = resp.products.slice();
            } catch (err) {
                this.showNotif(false, "Could not retrieve order details. ");
                this.order.hasError = true;
            } finally {
                this.order.loading = false;
            }
        },

        async getAccounts() {
            Account.getAccountSelection()
                .then(dat => {
                    this.customerList = dat.slice();
                    this.options = dat.slice();
                })
                .catch(err => {
                    this.customerList = [];
                });
        },

        async getOrderStatuses() {
            Order.getStatusSelection()
                .then(dat => {
                    this.orderStatuses = dat;
                })
                .catch(err => {
                    this.orderStatuses = [];
                });
        },

        printWindow() {
            window.print();
        }
    }
};
</script>
