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
                                                    no-unset
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
                                    @input="onSelCustomer"
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="close"
                                            @click.stop="clearSelCustomer"
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
                                    v-if="order.type == 'delivery'"
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
                                                    v-for="(opt,
                                                    oIdx) in product.options"
                                                    :key="'optKey-' + oIdx"
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
                                        @click="openProductPicker()"
                                    />
                                </div>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">
                                    Memo
                                </span>
                                <q-input
                                    type="textarea"
                                    textarea
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    class="field-value"
                                    v-model="order.memo"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Total Price</span>
                                {{ orderTotalPrice }} PHP
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Place Order"
                                type="submit"
                                color="primary"
                                :loading="loading"
                                :disable="
                                    loading || this.order.products.length < 1
                                "
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
                :showDlg.sync="showProductAdd"
                @hide="onCloseDialog(val)"
            >
                <template v-slot:product>
                    <q-form ref="selProductForm">
                        <q-item class="productdlg-item">
                            <q-select
                                class="search-field"
                                popup-content-class="options-light"
                                v-model="searchProduct"
                                :options="productOptions"
                                label="Search Product"
                                hide-dropdown-icon
                                hide-bottom-space
                                dark
                                options-dark
                                outlined
                                use-input
                                emit-value
                                map-options
                                debounce="250"
                                :loading="pfilterLoading"
                                @filter="pfilterFn"
                                @input="onSelectProduct"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="search" color="white" />
                                </template>
                                <template v-slot:append>
                                    <q-icon
                                        name="close"
                                        v-if="!pfilterLoading"
                                        @click.stop="
                                            [
                                                (searchProduct = null),
                                                (selectProduct = null)
                                            ]
                                        "
                                        class="cursor-pointer"
                                    />
                                </template>
                                <template v-slot:no-option>
                                    <q-item class="options-light">
                                        <q-item-section
                                            class="text-italic text-grey"
                                        >
                                            No products found.
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </q-item>
                        <q-list class="productdlg-list" v-if="selectProduct">
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Name
                                </div>
                                <div class="attr-value">
                                    {{ selectProduct.name }}
                                </div>
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Qty. (MIN:
                                    {{ selectProduct.minOrderQuantity }})
                                </div>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    type="number"
                                    class="attr-value"
                                    @input="onChgQty"
                                    :min="selectProduct.minOrderQuantity"
                                    v-model="customizedProduct.quantity"
                                />
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Options
                                </div>
                                <div
                                    class="attr-value q-my-sm"
                                    v-for="(item, key) in selectProduct.options"
                                    :key="'optKey-' + key"
                                >
                                    <span class="capitalize option-label">
                                        {{ item.attribute }}
                                    </span>
                                    <q-select
                                        popup-content-class="options-light"
                                        dense
                                        dark
                                        outlined
                                        :options="
                                            toSelOptions(
                                                item.attribute,
                                                item.choices
                                            )
                                        "
                                        v-model="customizedProduct.options[key]"
                                        @input="onSelOption(key)"
                                        lazy-rules
                                        :rules="[val => !!val]"
                                    />
                                    <q-input
                                        v-if="
                                            isOtherSelected(
                                                customizedProduct.options[key]
                                            )
                                        "
                                        dense
                                        dark
                                        outlined
                                        placeholder="Please specify"
                                        v-model="
                                            customizedProduct.otherVal[key]
                                        "
                                        lazy-rules
                                        :rules="[val => !!val]"
                                    />
                                </div>
                            </q-item>
                            <q-item class="productdlg-item">
                                <div class="attr-label text-grey-6">
                                    Price (PHP)
                                </div>
                                <div class="attr-value">
                                    {{ customizedProduct.price }}
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
                        label="Add"
                        color="primary"
                        @click="onSetProduct"
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
    overflow: hidden;
    word-wrap: none;
    text-overflow: ellipsis;
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
</style>
<script>
import ProductPicker from "../../components/ProductPicker";
import HelperMixin from "../../mixins/helpers";
let Account = null,
    Product = null,
    Order = null;

export default {
    name: "OrderAdd",
    components: { ProductPicker },
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Add Order"
        };
    },
    beforeCreate() {
        Account = this.$RepositoryFactory.get("accounts");
        Product = this.$RepositoryFactory.get("products");
        Order = this.$RepositoryFactory.get("orders");
    },
    created() {
        if (process.env.CLIENT) {
            this.getAccounts();
        }
    },
    computed: {
        orderTotalPrice() {
            return this.order.products.length > 0
                ? this.order.products.reduce((total, item) => {
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
            showProductAdd: false,
            loading: false,
            pfilterLoading: false,
            order: {
                products: [],
                customer: null,
                target: null,
                address: "",
                type: "delivery",
                memo: ""
            },
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
            productList: [],
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
            }
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

        removeProduct(productKey) {
            this.$delete(this.order.products, productKey);
        },

        openProductPicker(evt) {
            this.selectProduct = null;
            this.searchProduct = null;
            this.showProductAdd = true;
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
            this.order.customer = null;
            this.order.products.forEach(item => {
                item.discount = 0;
                item.finalPrice = item.price;
            });
        },

        onCloseDialog() {},

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

        finalizePrice() {
            // Check for discounts and update prices
            const accnt = this.customerList.find(item => {
                return item.value == this.order.customer;
            });
            if (!accnt) return;

            this.order.products.forEach(el => {
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
                    // this.$set(el, "discount", maxDiscount);
                    // this.$set(el, "finalPrice", finalPrice);
                    el.discount = maxDiscount;
                    el.finalPrice = finalPrice;
                }
            });
        },

        onSelCustomer(val) {
            this.finalizePrice();
        },

        onSetProduct() {
            // On "Add" from Dialog
            this.$refs.selProductForm.validate().then(success => {
                if (!success) {
                    return;
                }
                if (!this.selectProduct) return;
                this.order.products.push({
                    product: this.customizedProduct.id,
                    name: this.customizedProduct.name,
                    image: this.customizedProduct.image,
                    price: this.customizedProduct.price,
                    quantity: this.customizedProduct.quantity,
                    discount: 0, // temporary
                    finalPrice: this.customizedProduct.price, //temporary
                    discounts: this.customizedProduct.discounts,
                    options: this.customizedProduct.options.map((item, key) => {
                        return {
                            _option: item.key,
                            _selected: item.value.value,
                            otherValue:
                                item.value.value == "Other"
                                    ? this.customizedProduct.otherVal[key]
                                    : null
                        };
                    })
                });
                // Update all prices
                this.finalizePrice();

                // Reset Dialog
                this.showProductAdd = false;
                this.clearSelection();
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

        isOtherSelected(obj) {
            if (obj) {
                return obj.value.value == "Other";
            }

            return false;
        },

        async getAccounts() {
            Account.getAccountSelection()
                .then(dat => {
                    this.customerList = dat;
                })
                .catch(err => {
                    this.customerList = [];
                });
        },

        onSubmit: async function(evt) {
            this.loading = true;
            try {
                if (this.order.products.length < 1) {
                    throw "No products selected";
                }
                await Order.placeOrder(this.order);
                this.showNotif(true, "Placed new Order.");
                this.returnToPageIndex("/orders");
            } catch (err) {
                this.showNotif(false, "Could not place the order. ");
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
