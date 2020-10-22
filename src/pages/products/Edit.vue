<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Edit Product Information</h6>
                <br />
                <p>
                    You may edit the selected product details through this form.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="cake" class="caption-icon q-mx-md" />Product
                    Info
                </div>
                <div v-if="loading">
                    <q-item class="q-my-sm">
                        <q-spinner color="white" size="2em" />
                    </q-item>
                </div>
                <div v-else>
                    <q-stepper
                        v-model="step"
                        vertical
                        animated
                        class="bg-none"
                        done-color="primary"
                        inactive-color="grey-5"
                    >
                        <q-step
                            :name="1"
                            title="Basic Information"
                            icon="assignment"
                            :done="step > 1"
                        >
                            <p>Select category and fill out basic info.</p>
                            <q-form
                                ref="step1Form"
                                @submit.prevent.stop="saveStep1"
                                :disabled="hasError || loading"
                            >
                                <q-list class="detail-list" separator>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Category
                                        </span>
                                        <q-select
                                            class="field-value"
                                            v-model="editProduct.category"
                                            :options="categories"
                                            dark
                                            dense
                                            outlined
                                            options-dense
                                            hide-bottom-space
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
                                            v-model="editProduct.name"
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
                                            v-model="editProduct.description"
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
                                            v-model="editProduct.basePrice"
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
                                                editProduct.minOrderQuantity
                                            "
                                            lazy-rules
                                            :rules="[
                                                val => !isNaN(val) && val > 0
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Colors
                                        </span>
                                        <q-select
                                            class="field-value"
                                            v-model="editProduct.colors"
                                            hide-dropdown-icon
                                            hide-bottom-space
                                            dark
                                            outlined
                                            multiple
                                            use-chips
                                            lazy-rules
                                            :rules="[_isValidColor]"
                                        >
                                            <template v-slot:append>
                                                <q-icon
                                                    name="colorize"
                                                    class="cursor-pointer"
                                                >
                                                    <q-tooltip
                                                        :delay="550"
                                                        anchor="bottom right"
                                                        self="top middle"
                                                        :offset="[10, 10]"
                                                    >
                                                        Select color
                                                    </q-tooltip>
                                                    <q-popup-proxy>
                                                        <q-color
                                                            flat
                                                            square
                                                            no-header
                                                            no-footer
                                                            default-view="palette"
                                                            format-model="hex"
                                                            v-model="selcolor"
                                                            @input="
                                                                editProduct.colors.push(
                                                                    selcolor
                                                                )
                                                            "
                                                        />
                                                    </q-popup-proxy>
                                                </q-icon>
                                            </template>
                                        </q-select>
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
                                                    class="group-list"
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
                                                                    :delay="550"
                                                                    anchor="bottom right"
                                                                    self="top middle"
                                                                >
                                                                    Add new
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
                                                                        :delay="
                                                                            550
                                                                        "
                                                                        anchor="bottom right"
                                                                        self="top middle"
                                                                    >
                                                                        Remove
                                                                        this
                                                                        field
                                                                    </q-tooltip>
                                                                </q-icon>
                                                            </q-item-section>
                                                        </q-item>
                                                    </transition-group>
                                                    <br /><q-separator />
                                                </q-list>
                                            </transition-group>
                                            <q-btn
                                                class="q-mt-sm"
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
                                        :loading="loadingStep1"
                                        :disable="loadingStep1"
                                    />
                                </q-stepper-navigation>
                            </q-form>
                        </q-step>

                        <q-step
                            :name="2"
                            title="Product Images"
                            icon="add_photo_alternate"
                            :done="step > 2"
                        >
                            <p>
                                Click the + icon or drag the product images
                                (.jpg/.png and Max 2MB) for upload.
                            </p>
                            <q-form
                                ref="step2Form"
                                :disabled="hasError || loading"
                            >
                                <q-list class="detail-list" separator>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Gallery
                                        </span>
                                        <div class="field-value full-width">
                                            <q-uploader
                                                ref="pimgUploader"
                                                class="img-uploader"
                                                multiple
                                                square
                                                hide-upload-btn
                                                accept="image/jpeg,image/png"
                                                label="Image Upload"
                                                :filter="_validImage"
                                                @added="imgsAdded"
                                                @removed="imgsRemoved"
                                                @failed="onImgUploadFailed"
                                            />
                                            <br />
                                            <div class="flex">
                                                <q-card
                                                    class="q-mr-sm q-mb-sm"
                                                    v-for="pimg in editProduct.images"
                                                    :key="pimg._id"
                                                >
                                                    <div
                                                        v-if="
                                                            pimg.imageType ==
                                                                'gallery'
                                                        "
                                                    >
                                                        <div
                                                            class="pimg-card"
                                                            :style="
                                                                'background-image:url(\'' +
                                                                    resolveAssetsUrl(
                                                                        `${pimg.image}`
                                                                    ) +
                                                                    '\')'
                                                            "
                                                        ></div>
                                                        <q-card-actions
                                                            align="right"
                                                        >
                                                            <q-btn
                                                                dense
                                                                flat
                                                                round
                                                                color="red"
                                                                icon="delete"
                                                                @click="
                                                                    delImage(
                                                                        pimg._id
                                                                    )
                                                                "
                                                            />
                                                        </q-card-actions>
                                                    </div>
                                                </q-card>
                                            </div>
                                        </div>
                                    </q-item>
                                </q-list>

                                <q-stepper-navigation>
                                    <q-btn
                                        type="button"
                                        color="primary"
                                        :label="hasImgs ? 'Continue' : 'Skip'"
                                        :loading="loadingStep2"
                                        :disable="loadingStep2"
                                        @click="startUpload"
                                    >
                                        <template v-slot:loading>
                                            <q-spinner-gears />
                                        </template>
                                    </q-btn>
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
                            title="Order Customization Options"
                            icon="assignment"
                            :done="step > 3"
                        >
                            <p>Configure selectable options for orders.</p>
                            <p>
                                You may toggle between fixed choices and
                                customer customizable list.
                            </p>
                            <q-form
                                ref="step3Form"
                                @submit.prevent.stop="saveStep3"
                                :disabled="hasError || loading"
                            >
                                <q-list class="detail-list" separator>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Options
                                        </span>
                                        <div class="field-value">
                                            <transition-group
                                                name="fade"
                                                tag="div"
                                            >
                                                <q-list
                                                    v-for="(option,
                                                    grpkey) in options"
                                                    :key="'optgrp-' + grpkey"
                                                    class="group-list"
                                                >
                                                    <q-item>
                                                        <q-item-section
                                                            @click="
                                                                option.edit = true
                                                            "
                                                        >
                                                            <q-item-label
                                                                v-if="
                                                                    option.edit
                                                                "
                                                            >
                                                                <q-input
                                                                    @keydown.enter.prevent="
                                                                        option.edit = false
                                                                    "
                                                                    class=""
                                                                    type="text"
                                                                    dense
                                                                    dark
                                                                    hide-bottom-space
                                                                    placeholder="Attribute required "
                                                                    lazy-rules
                                                                    v-model="
                                                                        option.attribute
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
                                                                    option.attribute
                                                                }}
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-toggle
                                                                v-model="
                                                                    option.userCustomizable
                                                                "
                                                                unchecked-icon="lock"
                                                                color="green-4"
                                                                :label="
                                                                    option.userCustomizable
                                                                        ? 'User editable'
                                                                        : 'Fixed options'
                                                                "
                                                                @input="
                                                                    toggleCustomChoice(
                                                                        $event,
                                                                        grpkey
                                                                    )
                                                                "
                                                            />
                                                        </q-item-section>

                                                        <q-item-section side>
                                                            <q-icon
                                                                name="add"
                                                                color="white"
                                                                class="cursor-pointer"
                                                                @click="
                                                                    appendOptionItem(
                                                                        grpkey
                                                                    )
                                                                "
                                                            >
                                                                <q-tooltip
                                                                    :delay="550"
                                                                    anchor="bottom right"
                                                                    self="top middle"
                                                                >
                                                                    Add option
                                                                </q-tooltip>
                                                            </q-icon>
                                                        </q-item-section>
                                                    </q-item>
                                                    <transition-group
                                                        name="fade"
                                                        tag="div"
                                                    >
                                                        <q-item
                                                            v-for="(choice,
                                                            key) in filteredOptions(
                                                                option.choices,
                                                                option.userCustomizable
                                                            )"
                                                            :key="
                                                                'selitem-' + key
                                                            "
                                                        >
                                                            <div
                                                                class="detail-field-keyval"
                                                            >
                                                                <q-input
                                                                    :readonly="
                                                                        choice.value ==
                                                                            'Other'
                                                                    "
                                                                    class="option-list-key"
                                                                    type="text"
                                                                    dense
                                                                    outlined
                                                                    dark
                                                                    hide-bottom-space
                                                                    placeholder="Option required "
                                                                    lazy-rules
                                                                    v-model="
                                                                        choice.value
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
                                                                    class="option-list-price"
                                                                    type="number"
                                                                    dense
                                                                    outlined
                                                                    dark
                                                                    hide-bottom-space
                                                                    placeholder="Price "
                                                                    lazy-rules
                                                                    v-model="
                                                                        choice.price
                                                                    "
                                                                    :rules="[
                                                                        val =>
                                                                            val !==
                                                                                '' &&
                                                                            !isNaN(
                                                                                val
                                                                            )
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
                                                                        removeOptionItem(
                                                                            grpkey,
                                                                            key,
                                                                            choice.value
                                                                        )
                                                                    "
                                                                >
                                                                    <q-tooltip
                                                                        :delay="
                                                                            550
                                                                        "
                                                                        anchor="bottom right"
                                                                        self="top middle"
                                                                    >
                                                                        Remove
                                                                        this
                                                                        option
                                                                    </q-tooltip>
                                                                </q-icon>
                                                            </q-item-section>
                                                        </q-item>
                                                    </transition-group>
                                                    <br /><q-separator />
                                                </q-list>
                                            </transition-group>
                                            <q-btn
                                                class="q-mt-sm"
                                                dense
                                                flat
                                                no-caps
                                                icon="add"
                                                label="Add Customizable Option"
                                                @click="appendOptions"
                                            />
                                        </div>
                                    </q-item>
                                </q-list>

                                <q-stepper-navigation>
                                    <q-btn
                                        type="submit"
                                        color="primary"
                                        label="Continue"
                                        :loading="loadingStep3"
                                        :disable="loadingStep3"
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

                        <q-step :name="4" title="Done!" icon="add_comment">
                            <q-form
                                ref="step4Form"
                                @submit.prevent.stop="saveStep4"
                                :disabled="hasError || loading"
                            >
                                <p>
                                    You have successfully updated the product
                                    details.
                                </p>
                                <q-stepper-navigation>
                                    <q-btn
                                        color="primary"
                                        label="Finish"
                                        type="submit"
                                        :loading="loadingStep4"
                                        :disable="loadingStep4"
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
.full-width {
    max-width: 100% !important;
}
.pimg-card {
    width: 200px;
    height: 120px;
    background-size: cover;
    background-position: center;
}
.img-uploader {
    width: 388px;
}
.group-list .q-item {
    padding: 4px 0;
    display: flex;
}
.group-list > .q-item:first-child .q-input {
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
.option-list-key {
    margin: 2px 2px;
    flex: 1 1 228px;
}
.option-list-price {
    margin: 2px 2px;
    flex: 1 1 100px;
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
let Product = null,
    Category = null;

export default {
    name: "ProductEdit",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Edit Product"
        };
    },
    beforeCreate() {
        Category = this.$RepositoryFactory.get("categories");
        Product = this.$RepositoryFactory.get("products");
    },
    created() {
        if (process.env.CLIENT) {
            this.fetchCategories();
        }
    },
    mounted() {
        this.fetchProductDetails();
    },
    computed: {
        hasImgs() {
            return this.selimgs && this.selimgs.length > 0;
        }
    },
    data() {
        return {
            loadingStep1: false,
            loadingStep2: false,
            loadingStep3: false,
            loadingStep4: false,
            step: 1,
            selimgs: [],
            selcolor: "",
            categories: [],
            colors: [],
            details: [],
            options: [],
            loading: true,
            hasError: false,
            editProduct: {
                name: "",
                category: null,
                basePrice: 100,
                minOrderQuantity: 1,
                description: "",
                colors: [],
                options: [],
                details: [],
                images: []
            }
        };
    },
    methods: {
        _isValidCategory(val) {
            if (
                !(
                    this.editProduct.category &&
                    this.categories &&
                    this.categories.length > 0
                )
            ) {
                return "Invalid category selected";
            }

            const categoryItem = this.categories.find(option => {
                return option.value === this.editProduct.category;
            });

            if (!categoryItem) return "Invalid category selected";

            return true;
        },
        _isValidColor(val) {
            if (val && val.length > 0) {
                const hexpattern = /^#([0-9A-F]{3}){1,2}$/i;
                for (let i in val) {
                    if (!hexpattern.test(val[i]))
                        return "Invalid hex color selected";
                }
            }

            return true;
        },

        _validImage(files) {
            const filtered = files.filter(
                file =>
                    file.size < 1024 * 1024 * 2 && // 2MB
                    ["image/png", "image/jpeg"].includes(file.type)
            );

            if (
                !filtered ||
                filtered.length < 1 ||
                filtered.length < files.length
            ) {
                this.showNotif(false, "Selected image is not valid.");
            }

            return filtered;
        },

        async fetchCategories() {
            try {
                const resp = await Category.getProductCategorySelection();
                this.categories = resp.slice();
            } catch (err) {
                this.showNotif(false, "Could not retrieve product categories.");
                this.hasError = true;
            } finally {
                this.loading = false;
            }
        },

        async fetchProductDetails() {
            try {
                // Fetch product details
                const res = await Product.getProduct(this.$route.params.id);
                this.editProduct = res;
                if (this.editProduct.details) {
                    this.details = [
                        ...this.toReactiveDataFormat(this.editProduct.details)
                    ];
                }
                if (this.editProduct.options) {
                    this.options = [
                        ...this.toReactiveOptionsDataFormat(
                            this.editProduct.options
                        )
                    ];
                }
            } catch (err) {
                this.showNotif(false, "Could not retrieve product details.");
            }
        },

        toJSONFormatOptions: function(options) {
            const retArr = [];

            if (options && options.length > 0) {
                options.map(option => {
                    let choices = [];

                    // copy choices list
                    for (let i in option.choices) {
                        choices.push({
                            value: option.choices[i].value,
                            price: option.choices[i].price
                        });
                    }

                    // check settings
                    if (
                        option.userCustomizable &&
                        !this.hasCustomChoice(option.choices)
                    ) {
                        // add 'Other'
                        choices.unshift({ value: "Other", price: 0 });
                    } else if (
                        !option.userCustomizable &&
                        this.hasCustomChoice(option.choices)
                    ) {
                        // remove 'Other'
                        choices = this.filteredOptions(choices, false);
                    }

                    retArr.push({
                        attribute: option.attribute,
                        choices: choices,
                        userCustomizable: option.userCustomizable
                    });
                });
            }
            return retArr;
        },
        toReactiveOptionsDataFormat: function(options) {
            const retArr = [];
            if (options && options.length > 0) {
                options.map(option => {
                    retArr.push({
                        attribute: option.attribute,
                        userCustomizable: option.userCustomizable,
                        choices: option.choices,
                        edit: true
                    });
                });
            }

            return retArr;
        },
        toJSONFormatDetails: function(details) {
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

            // console.log(retArr);
            return retArr;
        },
        filteredOptions(list, showOther) {
            if (list && list.length > 0 && !showOther) {
                return list.filter(item => {
                    return item.value !== "Other";
                });
            }
            return list;
        },
        saveStep1: function(evt) {
            this.loadingStep1 = true;
            this.$refs.step1Form
                .validate()
                .then(async success => {
                    if (success) {
                        let res = {};
                        this.editProduct.details = [
                            ...this.toJSONFormatDetails(this.details)
                        ];
                        // Update product and return id (inactive)
                        res = await Product.updateProduct(
                            this.$route.params.id,
                            this.editProduct
                        );
                        this.loadingStep1 = false;
                        this.step = 2;
                    }
                })
                .catch(err => {
                    this.showNotif(false, "Could not edit product info.");
                    this.loadingStep1 = false;
                });
        },
        saveStep2: function(imgs) {
            this.loadingStep2 = true;
            this.$refs.step2Form
                .validate()
                .then(async success => {
                    if (success) {
                        if (imgs) {
                            this.editProduct.images = imgs.slice();
                        }
                        this.loadingStep2 = false;
                        this.step = 3;
                    }
                })
                .catch(err => {
                    this.showNotif(false, "Error has occurred.");
                    this.loadingStep2 = false;
                });
        },
        saveStep3: function(evt) {
            this.loadingStep3 = true;
            this.$refs.step3Form
                .validate()
                .then(async success => {
                    if (success) {
                        const opts = [
                            ...this.toJSONFormatOptions(this.options)
                        ];
                        this.editProduct.options = opts.slice();
                        const res = await Product.updateProduct(
                            this.$route.params.id,
                            this.editProduct
                        );
                        this.loadingStep3 = false;
                        this.step = 4;
                    }
                })
                .catch(err => {
                    this.showNotif(
                        false,
                        "Error updating customization options."
                    );
                    this.loadingStep3 = false;
                });
        },
        saveStep4: function(evt) {
            this.loadingStep4 = true;
            this.$refs.step4Form
                .validate()
                .then(async success => {
                    this.loadingStep4 = false;
                    this.returnToPageIndex("/products");
                })
                .catch(err => {
                    this.showNotif(false, "Error has occurred product.");
                    this.loadingStep4 = false;
                });
        },
        goBack: function(step) {
            if ([1, 2, 3].includes(step)) {
                this.step = step;
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
        appendGroup: function(evt) {
            this.details.push({
                group: "New Group",
                edit: true,
                items: [{ label: "", value: "" }]
            });
        },
        appendDetailItem: function(grp) {
            if (!isNaN(grp) && this.details[grp]) {
                this.details[grp].items.push({ label: "", value: "" });
            }
        },

        removeOptions: function(key) {
            this.$delete(this.options, key);
        },
        removeOptionItem: function(grp, key, value) {
            this.$delete(this.options[grp].choices, key);
            if (this.options[grp].choices.length === 0) {
                this.removeOptions(grp);
            } else if (value == "Other") {
                this.options[grp].userCustomizable = false;
            }
        },
        appendOptions: function(evt) {
            this.options.push({
                attribute: "New Option",
                userCustomizable: false,
                edit: true,
                choices: [{ value: "", price: "" }]
            });
        },
        appendOptionItem: function(grp) {
            if (!isNaN(grp) && this.options[grp]) {
                this.options[grp].choices.push({ value: "", price: "" });
            }
        },
        hasCustomChoice(list) {
            if (list && list.length > 0) {
                return list.find(item => {
                    return item.value == "Other";
                });
            }
            return false;
        },
        toggleCustomChoice: function(toggle, grp) {
            if (toggle) {
                if (
                    this.options[grp] &&
                    !this.hasCustomChoice(this.options[grp].choices)
                ) {
                    this.options[grp].choices.unshift({
                        value: "Other",
                        price: ""
                    });
                }
            } else {
                if (
                    this.options[grp] &&
                    this.hasCustomChoice(this.options[grp].choices)
                ) {
                    this.options[grp].choices.shift();
                }
            }
        },
        async delImage(pImgID) {
            try {
                const res = await Product.deleteImage(
                    this.$route.params.id,
                    pImgID
                );
                // Remove from local list
                this.editProduct.images = this.editProduct.images.filter(
                    item => {
                        return item._id !== pImgID;
                    }
                );
            } catch (err) {
                this.showNotif(false, "Could not remove image." + err);
            }
        },
        async startUpload() {
            try {
                this.loadingStep2 = true;
                if (this.hasImgs) {
                    let fd = new FormData();
                    this.selimgs.forEach(file => {
                        fd.append("image", file);
                    });
                    fd.append("imageType", "gallery");
                    const res = await Product.uploadImgs(
                        this.$route.params.id,
                        fd
                    );
                    // clear
                    this.selimgs = [];
                    this.saveStep2(res);
                } else {
                    this.saveStep2(false);
                }
            } catch (err) {
                this.showNotif(false, "Could not upload images.");
                this.loadingStep2 = false;
            }
        },
        imgsRemoved(file) {
            // Remove from list
            this.selimgs = this.selimgs.filter(item => item !== file[0]);
        },
        imgsAdded(file) {
            // Append to list
            this.selimgs.push(...file);
        },
        onImgUploadFailed: function(info) {
            this.showNotif(false, "Failed to add your selected image. ");
        }
    }
};
</script>
