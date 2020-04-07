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
                                                (val) =>
                                                    val !== null &&
                                                    val.trim() !== '',
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
                                                (val) =>
                                                    val !== null &&
                                                    val.trim() !== '',
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
                                            :rules="[(val) => !isNaN(val)]"
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
                                                (val) => !isNaN(val) && val > 0,
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Details
                                        </span>
                                        <div class="field-value">
                                            <q-list
                                                v-for="(detail,
                                                grpkey) in newProduct.details"
                                                :key="grpkey"
                                                class="detail-group-list"
                                            >
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label>
                                                            {{ detail.group }}
                                                        </q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side>
                                                        <q-icon
                                                            name="add"
                                                            color="white"
                                                            class="cursor-pointer"
                                                        >
                                                            <q-tooltip
                                                                anchor="bottom right"
                                                                self="top middle"
                                                                :offset="[
                                                                    10,
                                                                    10,
                                                                ]"
                                                                >Add new field
                                                            </q-tooltip>
                                                        </q-icon>
                                                    </q-item-section>
                                                </q-item>
                                                <q-item
                                                    v-for="(value,
                                                    key) in detail.items"
                                                    :key="key"
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
                                                        :value="key"
                                                        :rules="[
                                                            (val) =>
                                                                val !== null &&
                                                                val.trim() !==
                                                                    '',
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
                                                        :value="value"
                                                        :rules="[
                                                            (val) =>
                                                                val !== null &&
                                                                val.trim() !==
                                                                    '',
                                                        ]"
                                                    />
                                                </q-item>
                                            </q-list>
                                            <q-btn
                                                dense
                                                flat
                                                no-caps
                                                icon="add"
                                                label="Add Detail Group"
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
}
.detail-group-list .q-item:first-child {
    min-height: 1rem;
}
.detail-group-list .q-item:last-child {
    display: flex;
    flex-wrap: wrap;
}
.detail-list-key,
.detail-list-value {
    margin: 2px 2px;
    width: 188px;
    flex-grow: 1;
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
import { mapState, mapGetters, mapActions } from "vuex";
import HelperMixin from "../../mixins/helpers";

export default {
    name: "ProductAdd",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Add Product",
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
    computed: {
        ...mapState("addProduct", ["product"]),
    },
    data() {
        return {
            step: 1,
            categories: [
                {
                    label: "Cakes",
                    value: 1,
                },
                {
                    label: "Cupcakes",
                    value: 2,
                },
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
                            Ingredients: "eggs, flour, etc.",
                        },
                    },
                    // {
                    //     group: "Shipping",
                    //     items: {
                    //         Weight: "5 kg",
                    //         Height: "1 m",
                    //         Width: "60 cm",
                    //         Depth: "20 cm",
                    //     },
                    // },
                ],
                options: null,
                images: null,
            },
        };
    },
    methods: {
        ...mapActions("addProduct", [
            "setProductInfo",
            "setProductImages",
            "setProductOptions",
        ]),
        ...mapGetters("addProduct", ["getProduct"]),
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

            const categoryItem = this.categories.find((option) => {
                return option.value === this.newProduct.category;
            });

            if (!categoryItem) return "Invalid category selected";

            return true;
        },
        onSubmit: function (evt) {
            /**TODO */
            this.loading = true;
            setTimeout(() => {
                this.showNotif(true, "Successfully added new product. ");
                this.loading = false;
                this.returnToPageIndex("/products");
            }, 2500);
        },
        saveStep1: function (evt) {
            /** TODO */
            this.$refs.step1Form.validate().then((success) => {
                if (success) {
                    this.setProductInfo(this.newProduct);
                    console.log(this.getProduct());
                    this.step = 2;
                    this.$router.replace("/products/add/2").catch((err) => {});
                }
            });
        },
        saveStep2: function (evt) {
            /** TODO */
            this.$refs.step2Form.validate().then((success) => {
                if (success) {
                    const imgs = [
                        { imageType: "gallery", image: "123.jpg" },
                        { imageType: "gallery", image: "456.jpg" },
                    ];
                    this.setProductImages(imgs);
                    console.log(this.getProduct());
                    this.step = 3;
                    this.$router.replace("/products/add/3").catch((err) => {});
                }
            });
        },
        saveStep3: function (evt) {
            /** TODO */
            this.$refs.step3Form.validate().then((success) => {
                if (success) {
                    const opts = [
                        {
                            group: "ingredients",
                            attribute: "eggs",
                            value: 2,
                            unit: "pcs",
                        },
                        {
                            group: "ingredients",
                            attribute: "flour",
                            value: 3,
                            unit: "cups",
                        },
                        {
                            group: "ingredients",
                            attribute: "cornstarch",
                            value: 1,
                            unit: "cup",
                        },
                    ];
                    this.setProductOptions(opts);
                    console.log(this.getProduct());
                    this.step = 4;
                    this.$router.replace("/products/add/4").catch((err) => {});
                }
            });
        },
        saveStep4: function (evt) {
            /** TODO */
            // this.setProduct(this.newProduct);
            console.log(this.getProduct());
        },
        goBack: function (step) {
            if ([1, 2, 3].includes(step)) {
                this.step = step;
                this.$router
                    .replace("/products/add/" + step)
                    .catch((err) => {});
            }
        },
        removeGroup: function (key) {
            this.$delete(this.newProduct.details, key);
        },
        removeDetailItem: function (grp, key) {
            this.$delete(this.newProduct.details[grp].items, key);
        },
    },
};
</script>
