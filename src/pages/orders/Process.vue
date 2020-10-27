<template>
    <q-page class="q-px-md q-pt-lg">
        <q-drawer
            content-class="similar-orders"
            v-model="right"
            side="right"
            overlay
            elevated
        >
            <div class="flex q-mx-md q-mt-sm">
                <q-btn
                    flat
                    dense
                    class="q-ml-auto"
                    label="Hide"
                    no-ripple
                    @click="right = !right"
                ></q-btn>
            </div>
            <div
                class="q-my-sm text-h6 text-grey-5 flex flex-center"
                v-if="similarOrders && similarOrders.length > 0"
            >
                Similar Orders
            </div>
            <div class="q-my-sm text-h6 text-grey-5 flex flex-center" v-else>
                No similar orders found.
            </div>
            <q-card
                class="q-ma-md bg-grey-8"
                v-for="item in similarOrders"
                :key="item.ordernum"
            >
                <q-card-section>
                    <div class="text-subtitle2">{{ item.ordernum }}</div>
                    <div
                        square
                        class="text-subtitle2 capitalize"
                        :class="'ctext-' + item.status.toLowerCase()"
                    >
                        {{ item.status }}
                    </div>
                    <div class="text-subtitle2">{{ item.customer }}</div>
                    <div class="text-subtitle2">{{ item.target }}</div>
                    <div class="text-subtitle2">{{ item.price }}</div>
                    <div class="text-grey-5">{{ item.similarity }}</div>
                </q-card-section>
                <q-separator />
                <q-card-actions dense vertical>
                    <q-btn dense flat :to="'/orders/process/' + item.ordernum"
                        >Configure</q-btn
                    >
                </q-card-actions>
            </q-card>
        </q-drawer>

        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Process Order</h6>
                <br />
                <p>
                    You may view, edit, and change the order status and
                    details.<br />
                    CAUTION: Editing Customer and/or Products fields will place
                    a NEW order with the updated price.
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

                    <q-btn
                        no-ripple
                        class="q-ml-auto q-mr-sm"
                        flat
                        align="right"
                        :label="(right ? 'Hide' : 'Find') + ' Similar'"
                        @click="right = !right"
                    />
                </div>
                <div>
                    <q-form
                        @submit.prevent.stop="onSubmit"
                        :disabled="order.hasError || order.loading"
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
                                    dark
                                    dense
                                    outlined
                                    hide-bottom-space
                                    options-dense
                                    emit-value
                                    map-options
                                    lazy-rules
                                    :rules="[_isValidStatus]"
                                />
                            </q-item>
                            <q-item
                                class="detail-field"
                                v-if="isReplacedStatus"
                            >
                                <span class="field-label">Replaced by:</span>
                                {{ order.data.replacedBy }}
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Target Date</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    class="field-value"
                                    v-model="order.data.target"
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
                                                    v-model="order.data.target"
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
                                                    v-model="order.data.target"
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
                                    v-model="order.data.type"
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
                            <transition name="fade">
                                <q-item
                                    class="detail-field"
                                    v-if="order.data.type == 'delivery'"
                                >
                                    <span class="field-label">Address</span>
                                    <q-input
                                        dense
                                        outlined
                                        dark
                                        hide-bottom-space
                                        class="field-value"
                                        v-model="order.data.address"
                                        lazy-rules
                                        :rules="[
                                            val =>
                                                val !== null &&
                                                val.trim() !== ''
                                        ]"
                                    />
                                </q-item>
                            </transition>
                            <q-item class="detail-field">
                                <span class="field-label">Replace Order</span>
                                <q-toggle
                                    v-model="confirmEditProduct"
                                    checked-icon="check"
                                    color="green-4"
                                    unchecked-icon="clear"
                                    :label="confirmEditProduct ? 'Yes' : 'No'"
                                />
                            </q-item>
                            <q-item class="detail-field">
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
                                            @click.stop="
                                                order.data.customer = null
                                            "
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

                            <q-item class="detail-field product-field">
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
                                        <q-item-section
                                            side
                                            class="action-buttons text-white"
                                        >
                                            <q-btn
                                                :disabled="!confirmEditProduct"
                                                flat
                                                dense
                                                rounded
                                                icon="build_circle"
                                                @click="editProduct(idx)"
                                            >
                                                <q-tooltip>
                                                    Configure
                                                </q-tooltip>
                                            </q-btn>
                                            <q-btn
                                                flat
                                                dense
                                                rounded
                                                icon="clear"
                                                @click="removeProduct(idx)"
                                                :disabled="
                                                    !confirmEditProduct ||
                                                        showProductEdit ||
                                                        showProductAdd
                                                "
                                            >
                                                <q-tooltip>
                                                    Remove
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
                                        :disabled="
                                            showProductEdit || showProductAdd
                                        "
                                    />
                                </div>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Total Price</span>
                                {{ orderTotalPrice }} PHP
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Save"
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

            <!-- Product Picker Dialog -->
            <ProductPicker
                :showDlg.sync="showProductEdit"
                v-bind="{
                    productReady,
                    dialogLoading
                }"
                @hide="onCloseDialog(val)"
            >
                <template v-slot:product>
                    <q-form @submit.prevent.stop="onSetProduct">
                        <q-list class="productdlg-list">
                            <q-item class="productdlg-item">
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    debounce="250"
                                    placeholder="Search Product"
                                    class="search-field"
                                    v-model="searchProduct"
                                    @
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="search" color="white" />
                                    </template>
                                </q-input>
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Name
                                </div>
                                <div class="attr-value">
                                    {{ selectedProduct.name }}
                                </div>
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Options
                                </div>
                                <div
                                    class="attr-value q-my-sm"
                                    v-for="(item,
                                    key) in selectedProduct.options"
                                    :key="'pkey-' + key"
                                >
                                    <span class="capitalize option-label">
                                        {{ item._option }}
                                    </span>
                                    <q-select
                                        class="option-select"
                                        dense
                                        dark
                                        outlined
                                        v-model="item._selected"
                                    />
                                </div>
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Qty.
                                </div>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    type="number"
                                    class="attr-value"
                                    v-model="selectedProduct.quantity"
                                />
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Price (PHP)
                                </div>
                                <div class="attr-value">
                                    {{ selectedProduct.price }}
                                </div>
                            </q-item>
                        </q-list>
                    </q-form>
                </template>
                <template v-slot:actions>
                    <q-btn
                        flat
                        label="Cancel"
                        @click="onCloseDialog"
                        v-close-popup
                    />
                    <q-btn
                        flat
                        label="OK"
                        color="primary"
                        @click="onSelectProduct"
                        v-close-popup
                    />
                </template>
            </ProductPicker>
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
@media (max-width: 1290px) {
    .similar-orders {
        background: #1a1d1a !important;
    }
}
</style>
<script>
import ProductPicker from "../../components/ProductPicker";
import HelperMixin from "../../mixins/helpers";
let Account = null,
    Product = null,
    Order = null;

export default {
    name: "OrderProcess",
    components: { ProductPicker },
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Process Order"
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
            return this.orderStatuses.some(item => item == this.order.status);
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
        }
    },
    data() {
        return {
            right: false,
            loading: false,
            dialogLoading: true,
            productReady: false,
            showProductEdit: false,
            showProductAdd: false,
            confirmEditProduct: false,
            searchProduct: "",
            selectedProduct: null,
            order: {
                loading: true,
                hasError: false,
                data: {
                    products: [],
                    total: 12333.01,
                    customer: null,
                    target: null,
                    address: "",
                    type: "delivery",
                    status: null
                }
            },
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
            similarOrders: [
                {
                    ordernum: "507f1f77bcf86cd799439011",
                    status: "Placed",
                    target: "Feb 20, 2020",
                    customer: "John",
                    similarity: "Same product orders",
                    total: 1000
                },
                {
                    ordernum: 2,
                    status: "Processing",
                    target: "Feb 20, 2020",
                    customer: "John",
                    similarity: "Same target date",
                    total: 3000
                },
                {
                    ordernum: 1,
                    status: "fulfilled",
                    target: "Feb 20, 2020 10:30",
                    customer: "AAAAAAA",
                    total: 2000
                },
                {
                    ordernum: 22,
                    status: "Cancelled",
                    target: "Feb 10, 2020 10:30",
                    customer: "AAA",
                    total: 200.5
                }
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
        createProductDialog(productKey) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.selectedProduct = this.order.data.products[productKey];
                    resolve("TODO");
                }, 1500);
            });
        },
        async addProduct() {
            this.showProductAdd = true;
        },
        async editProduct(productKey) {
            this.productReady = false;
            this.dialogLoading = true;

            this.showProductEdit = true;
            await this.createProductDialog(productKey);

            this.productReady = true;
            this.dialogLoading = false;
        },
        onCloseDialog() {
            // RESET
            // this.productReady = false;
            // this.dialogLoading = true;
        },
        onSelectProduct() {
            // RESET
            // this.productReady = false;
            // this.dialogLoading = true;
        },
        removeProduct(productKey) {
            console.log(productKey);
            this.$delete(this.order.data.products, productKey);
        },
        onSetProduct() {
            /**TODO */
            // replace list after http request
        },
        async getOrderDetails() {
            try {
                const resp = await Order.getOrder(this.$route.params.id);
                this.order.data = resp;
            } catch (err) {
                this.showNotif(
                    false,
                    err + "Could not retrieve order details. "
                );
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

        onSubmit: async function(evt) {
            this.loading = true;
            try {
                if (this.order.data.products.length < 1) {
                    throw "No products selected";
                }
                if (this.confirmEditProduct) {
                    // Place new Order and update status of this order to 'Replaced'
                    await Order.replaceOrder(
                        this.$route.params.id,
                        this.order.data
                    );
                    this.showNotif(true, "Replaced new Order.");
                } else {
                    await Order.updateOrder(
                        this.$route.params.id,
                        this.order.data
                    );
                    this.showNotif(true, "Updated Order details.");
                }
                this.returnToPageIndex("/orders");
            } catch (err) {
                this.showNotif(false, err + " Could not process the order. ");
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
