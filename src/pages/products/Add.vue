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
                    <q-form @submit.prevent.stop="onSubmit">
                        <q-stepper
                            v-model="step"
                            vertical
                            animated
                            class="bg-none"
                        >
                            <q-step
                                :name="1"
                                title="Select category and fill out basic info"
                                icon="assignment"
                                :done="step > 1"
                            >
                                <q-list class="detail-list" separator>
                                    <q-item class="detail-field">
                                        <span class="field-label">
                                            Category
                                        </span>
                                        <q-select
                                            class="field-value"
                                            v-model="product.category"
                                            :options="categories"
                                            dark
                                            dense
                                            outlined
                                            hide-bottom-space
                                            options-dense
                                            emit-value
                                            map-options
                                            lazy-rules
                                            :rules="[
                                                val =>
                                                    val !== null &&
                                                    val.trim() !== '',
                                                val => categories.includes(val)
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label"
                                            >Product Name</span
                                        >
                                        <q-input
                                            type="text"
                                            dense
                                            outlined
                                            dark
                                            hide-bottom-space
                                            placeholder="Field required. "
                                            class="field-value"
                                            v-model="product.name"
                                            lazy-rules
                                            :rules="[
                                                val =>
                                                    val !== null &&
                                                    val.trim() !== ''
                                            ]"
                                        />
                                    </q-item>
                                    <q-item class="detail-field">
                                        <span class="field-label"
                                            >Description</span
                                        >
                                        <q-input
                                            type="textarea"
                                            textarea
                                            dense
                                            outlined
                                            dark
                                            hide-bottom-space
                                            placeholder="Field required. "
                                            class="field-value"
                                            v-model="product.description"
                                            lazy-rules
                                            :rules="[
                                                val =>
                                                    val !== null &&
                                                    val.trim() !== ''
                                            ]"
                                        />
                                    </q-item>
                                </q-list>

                                <q-stepper-navigation>
                                    <q-btn
                                        @click="step = 2"
                                        color="primary"
                                        label="Continue"
                                    />
                                </q-stepper-navigation>
                            </q-step>

                            <q-step
                                :name="2"
                                title="Upload product images"
                                icon="add_photo_alternate"
                                :done="step > 2"
                            >
                                An ad group contains one or more ads which
                                target a shared set of keywords.

                                <q-stepper-navigation>
                                    <q-btn
                                        @click="step = 3"
                                        color="primary"
                                        label="Continue"
                                    />
                                    <q-btn
                                        flat
                                        @click="step = 1"
                                        color="primary"
                                        label="Back"
                                        class="q-ml-sm"
                                    />
                                </q-stepper-navigation>
                            </q-step>

                            <q-step
                                :name="3"
                                title="Ad template"
                                icon="assignment"
                                :done="step > 3"
                            >
                                This step won't show up because it is disabled.

                                <q-stepper-navigation>
                                    <q-btn
                                        @click="step = 4"
                                        color="primary"
                                        label="Continue"
                                    />
                                    <q-btn
                                        flat
                                        @click="step = 2"
                                        color="primary"
                                        label="Back"
                                        class="q-ml-sm"
                                    />
                                </q-stepper-navigation>
                            </q-step>

                            <q-step
                                :name="4"
                                title="Create an ad"
                                icon="add_comment"
                            >
                                Try out different ad text to see what brings in
                                the most customers, and learn how to enhance
                                your ads using features like ad extensions. If
                                you run into any problems with your ads, find
                                out how to tell if they're running and how to
                                resolve approval issues.

                                <q-stepper-navigation>
                                    <q-btn color="primary" label="Finish" />
                                    <q-btn
                                        flat
                                        @click="step = 3"
                                        color="primary"
                                        label="Back"
                                        class="q-ml-sm"
                                    />
                                </q-stepper-navigation>
                            </q-step>
                        </q-stepper>
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

export default {
    name: "ProductAdd",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Add Product"
        };
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
            product: {
                name: "",
                category: 2,
                basePrice: 1,
                minOrderQuantity: 1,
                description: "",
                details: null,
                variants: null,
                images: null
            }
        };
    },
    methods: {
        onSubmit: function(evt) {
            /**TODO */
            this.loading = true;
            setTimeout(() => {
                this.showNotif(
                    true,
                    "Successfully added new holiday. " + this.holiday.reason
                );
                this.loading = false;
                this.returnToPageIndex("/holidays");
            }, 2500);
        }
    }
};
</script>
