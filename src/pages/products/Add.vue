<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Add Product</h6>
                <br />
                <p>
                    Fill out the form to create a new product in the webstore.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="cake" class="caption-icon q-mx-md" />Product
                    Info
                </div>
                <div>
                    <q-stepper v-model="step" vertical animated class="bg-none">
                        <q-step
                            :name="1"
                            title="Select category and fill out basic info"
                            icon="assignment"
                            :done="step > 1"
                        >
                            <q-form
                                ref="step1Form"
                                @submit.prevent.stop="saveStep1"
                            >
                                <q-list class="detail-list" separator>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Category
                                        </span>
                                        <q-select
                                            class="field-value"
                                            v-model="newProduct.category"
                                            :options="categories"
                                            dark
                                            dense
                                            outlined
                                            hide-bottom-space
                                            options-dense
                                            emit-value
                                            map-options
                                            lazy-rules
                                            :rules="[_isValidCategory]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Product Name
                                        </span>
                                        <q-input
                                            type="text"
                                            dense
                                            outlined
                                            dark
                                            hide-bottom-space
                                            placeholder="Field required. "
                                            class="field-value"
                                            v-model="newProduct.name"
                                            lazy-rules
                                            :rules="[
                                                val =>
                                                    val !== null &&
                                                    val.trim() !== ''
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Description
                                        </span>
                                        <q-input
                                            type="textarea"
                                            textarea
                                            dense
                                            outlined
                                            dark
                                            hide-bottom-space
                                            placeholder="Field required. "
                                            class="field-value"
                                            v-model="newProduct.description"
                                            lazy-rules
                                            :rules="[
                                                val =>
                                                    val !== null &&
                                                    val.trim() !== ''
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Base price
                                        </span>
                                        <q-input
                                            type="number"
                                            min="1"
                                            dense
                                            outlined
                                            dark
                                            hide-bottom-space
                                            placeholder="Field required. "
                                            class="field-value"
                                            v-model="newProduct.basePrice"
                                            lazy-rules
                                            :rules="[val => !isNaN(val)]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Minimum Order Quantity
                                        </span>
                                        <q-input
                                            type="number"
                                            min="1"
                                            dense
                                            outlined
                                            dark
                                            hide-bottom-space
                                            placeholder="Field required. "
                                            class="field-value"
                                            v-model="
                                                newProduct.minOrderQuantity
                                            "
                                            lazy-rules
                                            :rules="[
                                                val => !isNaN(val) && val > 0
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Details
                                        </span>
                                        <div class="field-value">
                                            <transition-group
                                                name="fade"
                                                tag="div"
                                            >
                                                <q-list
                                                    v-for="(detail,
                                                    grpkey) in details"
                                                    :key="'grp-' + grpkey"
                                                    class="detail-group-list"
                                                >
                                                    <q-item>
                                                        <q-item-section
                                                            @click="
                                                                detail.edit = true
                                                            "
                                                        >
                                                            <q-item-label
                                                                v-if="
                                                                    detail.edit
                                                                "
                                                            >
                                                                <q-input
                                                                    @keydown.enter.prevent="
                                                                        detail.edit = false
                                                                    "
                                                                    class=""
                                                                    type="text"
                                                                    dense
                                                                    dark
                                                                    hide-bottom-space
                                                                    placeholder="Group title required "
                                                                    lazy-rules
                                                                    v-model="
                                                                        detail.group
                                                                    "
                                                                    :rules="[
                                                                        val =>
                                                                            val !==
                                                                                null &&
                                                                            val.trim() !==
                                                                                ''
                                                                    ]"
                                                                />
                                                            </q-item-label>
                                                            <q-item-label
                                                                v-else
                                                            >
                                                                {{
                                                                    detail.group
                                                                }}
                                                            </q-item-label>
                                                        </q-item-section>

                                                        <q-item-section side>
                                                            <q-icon
                                                                name="add"
                                                                color="white"
                                                                class="cursor-pointer"
                                                                @click="
                                                                    appendDetailItem(
                                                                        grpkey
                                                                    )
                                                                "
                                                            >
                                                                <q-tooltip
                                                                    anchor="bottom right"
                                                                    self="top middle"
                                                                    :offset="[
                                                                        10,
                                                                        10
                                                                    ]"
                                                                    >Add new
                                                                    field
                                                                </q-tooltip>
                                                            </q-icon>
                                                        </q-item-section>
                                                    </q-item>
                                                    <transition-group
                                                        name="fade"
                                                        tag="div"
                                                    >
                                                        <q-item
                                                            v-for="(item,
                                                            key) in detail.items"
                                                            :key="'item-' + key"
                                                        >
                                                            <div
                                                                class="detail-field-keyval"
                                                            >
                                                                <q-input
                                                                    class="detail-list-key"
                                                                    type="text"
                                                                    dense
                                                                    outlined
                                                                    dark
                                                                    hide-bottom-space
                                                                    placeholder="Label required "
                                                                    lazy-rules
                                                                    v-model="
                                                                        item.label
                                                                    "
                                                                    :rules="[
                                                                        val =>
                                                                            val !==
                                                                                null &&
                                                                            val.trim() !==
                                                                                ''
                                                                    ]"
                                                                />
                                                                <q-input
                                                                    class="detail-list-value"
                                                                    type="text"
                                                                    dense
                                                                    outlined
                                                                    dark
                                                                    hide-bottom-space
                                                                    placeholder="Value required "
                                                                    lazy-rules
                                                                    v-model="
                                                                        item.value
                                                                    "
                                                                    :rules="[
                                                                        val =>
                                                                            val !==
                                                                                null &&
                                                                            val.trim() !==
                                                                                ''
                                                                    ]"
                                                                />
                                                            </div>
                                                            <q-item-section
                                                                side
                                                            >
                                                                <q-icon
                                                                    name="remove"
                                                                    color="white"
                                                                    class="cursor-pointer remove-icon"
                                                                    @click="
                                                                        removeDetailItem(
                                                                            grpkey,
                                                                            key
                                                                        )
                                                                    "
                                                                >
                                                                    <q-tooltip
                                                                        anchor="bottom right"
                                                                        self="top middle"
                                                                        :offset="[
                                                                            10,
                                                                            10
                                                                        ]"
                                                                        >Remove
                                                                        this
                                                                        field
                                                                    </q-tooltip>
                                                                </q-icon>
                                                            </q-item-section>
                                                        </q-item>
                                                    </transition-group>
                                                </q-list>
                                            </transition-group>
                                            <q-btn
                                                dense
                                                flat
                                                no-caps
                                                icon="add"
                                                label="Add Detail Group"
                                                @click="appendGroup"
                                            />
                                        </div>
                                    </q-item>
                                </q-list>

                                <q-stepper-navigation>
                                    <q-btn
                                        color="primary"
                                        type="submit"
                                        label="Continue"
                                    />
                                </q-stepper-navigation>
                            </q-form>
                        </q-step>

                        <q-step
                            :name="2"
                            title="Upload product images"
                            icon="add_photo_alternate"
                            :done="step > 2"
                        >
                            <q-form
                                ref="step2Form"
                                @submit.prevent.stop="saveStep2"
                            >
                                An ad group contains one or more ads which
                                target a shared set of keywords.
                                <q-stepper-navigation>
                                    <q-btn
                                        type="submit"
                                        color="primary"
                                        label="Continue"
                                    />
                                    <q-btn
                                        flat
                                        @click="goBack(1)"
                                        color="primary"
                                        label="Back"
                                        class="q-ml-sm"
                                    />
                                </q-stepper-navigation>
                            </q-form>
                        </q-step>

                        <q-step
                            :name="3"
                            title="Configure selectable options"
                            icon="assignment"
                            :done="step > 3"
                        >
                            <q-form
                                ref="step3Form"
                                @submit.prevent.stop="saveStep3"
                            >
                                This step won't show up because it is disabled.

                                <q-stepper-navigation>
                                    <q-btn
                                        type="submit"
                                        color="primary"
                                        label="Continue"
                                    />
                                    <q-btn
                                        flat
                                        @click="goBack(2)"
                                        color="primary"
                                        label="Back"
                                        class="q-ml-sm"
                                    />
                                </q-stepper-navigation>
                            </q-form>
                        </q-step>

                        <q-step
                            :name="4"
                            title="Publish new product"
                            icon="add_comment"
                        >
                            <q-form
                                ref="step4Form"
                                @submit.prevent.stop="saveStep4"
                            >
                                Try out different ad text to see what brings in
                                the most customers, and learn how to enhance
                                your ads using features like ad extensions. If
                                you run into any problems with your ads, find
                                out how to tell if they're running and how to
                                resolve approval issues.

                                <q-stepper-navigation>
                                    <q-btn
                                        color="primary"
                                        label="Finish"
                                        type="submit"
                                    />
                                    <q-btn
                                        flat
                                        @click="goBack(3)"
                                        color="primary"
                                        label="Back"
                                        class="q-ml-sm"
                                    />
                                </q-stepper-navigation>
                            </q-form>
                        </q-step>
                    </q-stepper>
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
    grid-template-columns: minmax(360px, 900px);
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
    padding-left: 0;
}
.detail-field .field-label {
    width: 140px;
}
.detail-field .field-value {
    flex: 1;
    max-width: 388px;
}
.detail-group-list .q-item {
    padding: 4px 0;
    display: flex;
}
.detail-group-list > .q-item:first-child .q-input {
    max-width: 180px;
}
.detail-field-keyval {
    display: flex;
    flex-wrap: wrap;
}
.detail-list-key,
.detail-list-value {
    margin: 2px 2px;
    flex: 1 1 164px;
}
.remove-icon {
    margin-right: -16px;
}
.qtext-editor {
    border: 2px solid white;
}
.has-error {
    border: 2px solid $negative;
}

@media (max-width: 500px) {
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
import ProductMixin from "../../mixins/product";

export default {
    preFetch({ store, currentRoute }) {
        // console.log(store.state);
        console.log("PREFETCH CALL");
    },

    name: "ProductAdd",
    mixins: [HelperMixin, ProductMixin],
    meta() {
        return {
            title: "Add Product"
        };
    },
    created() {
        if (this.$route.params.step) {
            this.step = !isNaN(this.$route.params.step)
                ? parseInt(this.$route.params.step)
                : 1;
        }
        if (!this.product.category && this.categories) {
            // this.product.category = this.categories[0].value;
        }
    },
    destroyed() {
        this.clearState();
    },
    mounted() {
        this.details = [...this.toReactiveDataFormat(this.newProduct.details)];
    },
    data() {
        return {
            step: 1,
            categories: [
                {
                    label: "Cakes",
                    value: 1
                },
                {
                    label: "Cupcakes",
                    value: 2
                }
            ],
            details: [
                // {
                //     group: "General",
                //     items: [
                //         { label: "Ingredients", value: "2 eggs, 1 cup flour" }
                //     ],
                //     edit: true
                // }
            ],
            newProduct: {
                name: "",
                category: 2,
                basePrice: 100,
                minOrderQuantity: 1,
                description: "",
                details: [
                    {
                        group: "General",
                        items: {
                            Ingredients: "2 eggs, 2 tbsp vanilla, etc.",
                            Sweetness: 123
                        }
                    },
                    {
                        group: "Shipping",
                        items: {
                            Weight: "1.5 kg",
                            Dimensions: "20cm x 15cm x 60cm"
                        }
                    }
                ],
                options: null,
                images: null
            }
        };
    },
    methods: {
        _isValidCategory(val) {
            if (
                !(
                    this.newProduct.category &&
                    this.categories &&
                    this.categories.length > 0
                )
            ) {
                return "Invalid category selected";
            }

            const categoryItem = this.categories.find(option => {
                return option.value === this.newProduct.category;
            });

            if (!categoryItem) return "Invalid category selected";

            return true;
        },
        onSubmit: function(evt) {
            /**TODO */
            this.loading = true;
            setTimeout(() => {
                this.showNotif(true, "Successfully added new product. ");
                this.loading = false;
                this.returnToPageIndex("/products");
            }, 2500);
        },
        toJSONFormat: function(details) {
            const retArr = [];

            if (details && details.length > 0) {
                details.map(detail => {
                    const groupItems = {};
                    if (detail.items && detail.items.length > 0) {
                        detail.items.map(item => {
                            groupItems[item.label] = item.value;
                        });
                    }

                    if (detail.group && Object.keys(groupItems).length > 0) {
                        retArr.push({
                            group: detail.group,
                            items: groupItems
                        });
                    }
                });
            }

            return retArr;
        },
        toReactiveDataFormat: function(details) {
            const retArr = [];

            if (details && details.length > 0) {
                details.map(detail => {
                    const groupItemsArr = [];
                    if (detail.items && Object.keys(detail.items).length > 0) {
                        for (let key in detail.items) {
                            groupItemsArr.push({
                                label: key,
                                value: detail.items[key].toString()
                            });
                        }
                    }
                    if (detail.group && groupItemsArr.length > 0) {
                        retArr.push({
                            group: detail.group,
                            items: groupItemsArr,
                            edit: true
                        });
                    }
                });
            }

            console.log(retArr);
            return retArr;
        },
        saveStep1: function(evt) {
            /** TODO */
            this.$refs.step1Form.validate().then(success => {
                if (success) {
                    this.newProduct.details = [
                        ...this.toJSONFormat(this.details)
                    ];

                    this.setProductInfo(this.newProduct);
                    console.log(this.getProduct());
                    this.step = 2;
                    this.$router.replace("/products/add/2").catch(err => {});
                }
            });
        },
        saveStep2: function(evt) {
            /** TODO */
            this.$refs.step2Form.validate().then(success => {
                if (success) {
                    const imgs = [
                        { imageType: "gallery", image: "123.jpg" },
                        { imageType: "gallery", image: "456.jpg" }
                    ];
                    this.setProductImages(imgs);
                    console.log(this.getProduct());
                    this.step = 3;
                    this.$router.replace("/products/add/3").catch(err => {});
                }
            });
        },
        saveStep3: function(evt) {
            /** TODO */
            this.$refs.step3Form.validate().then(success => {
                if (success) {
                    const opts = [
                        {
                            group: "ingredients",
                            attribute: "eggs",
                            value: 2,
                            unit: "pcs"
                        },
                        {
                            group: "ingredients",
                            attribute: "flour",
                            value: 3,
                            unit: "cups"
                        },
                        {
                            group: "ingredients",
                            attribute: "cornstarch",
                            value: 1,
                            unit: "cup"
                        }
                    ];
                    this.setProductOptions(opts);
                    console.log(this.getProduct());
                    this.step = 4;
                    this.$router.replace("/products/add/4").catch(err => {});
                }
            });
        },
        saveStep4: function(evt) {
            /** TODO */
            // this.setProduct(this.newProduct);
            console.log(this.getProduct());
        },
        goBack: function(step) {
            if ([1, 2, 3].includes(step)) {
                this.step = step;
                this.$router.replace("/products/add/" + step).catch(err => {});
            }
        },
        removeGroup: function(key) {
            this.$delete(this.details, key);
        },
        removeDetailItem: function(grp, key) {
            this.$delete(this.details[grp].items, key);
            if (this.details[grp].items.length === 0) {
                this.removeGroup(grp);
            }
        },
        appendGroup: function(grp) {
            this.details.push({
                group: "New Group",
                edit: true,
                items: [{ label: "", value: "" }]
            });
        },
        appendDetailItem: function(grp) {
            console.log(grp);
            if (!isNaN(grp) && this.details[grp]) {
                this.details[grp].items.push({ label: "", value: "" });
            }
        }
    }
};
</script>
