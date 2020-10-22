<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Feature Product</h6>
                <br />
                <p>
                    Cofigure the following form to feature the product.<br />
                    NOTE: Uploading an image will replace the existing banner,
                    if applicable.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Product Info
                </div>
                <div>
                    <q-form
                        @submit.prevent.stop="onSubmit"
                        :disabled="
                            featureProduct.hasError || featureProduct.loading
                        "
                    >
                        <q-item class="q-mt-sm" v-if="featureProduct.loading">
                            <q-spinner color="white" size="2em" />
                        </q-item>
                        <q-list class="detail-list" separator v-else>
                            <q-item class="detail-field">
                                <span class="field-label">Product Name</span>
                                {{ featureProduct.data.name }}
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Status</span>
                                <q-toggle
                                    v-model="featureProduct.data.isFeatured"
                                    checked-icon="check"
                                    color="green-4"
                                    unchecked-icon="clear"
                                    :label="
                                        featureProduct.data.isFeatured
                                            ? 'Featured'
                                            : 'Not Featured'
                                    "
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">
                                    Banner
                                </span>
                                <div class="field-value">
                                    <q-uploader
                                        :disable="
                                            !featureProduct.data.isFeatured
                                        "
                                        ref="pimgUploader"
                                        class="img-uploader full-width"
                                        square
                                        hide-upload-btn
                                        accept="image/jpeg,image/png"
                                        label="Image Upload (Replace)"
                                        :filter="_validImage"
                                        @added="imgsAdded"
                                        @removed="imgsRemoved"
                                        @failed="onImgUploadFailed"
                                    />
                                    <br />
                                    <div
                                        class="flex"
                                        v-if="
                                            productBanner !== null &&
                                                selimg === null
                                        "
                                    >
                                        <q-img
                                            :src="
                                                resolveAssetsUrl(productBanner)
                                            "
                                            :ratio="16 / 9"
                                        />
                                    </div>
                                </div>
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                :label="
                                    selimg !== null ? 'Upload and Save' : 'Save'
                                "
                                type="submit"
                                color="primary"
                                :loading="loading"
                                :disable="loading || missingUpload"
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
}
.detail-field .field-label {
    width: 140px;
}
.detail-field .field-value {
    flex: 1;
}
.full-width {
    max-width: 100% !important;
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
let Product = null;

export default {
    name: "ProductFeature",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Feature Product"
        };
    },
    beforeCreate() {
        Product = this.$RepositoryFactory.get("products");
    },
    created() {
        if (process.env.CLIENT) this.getProduct();
    },
    computed: {
        productBanner() {
            const banner = this.featureProduct.data.images.find(item => {
                return item.imageType == "banner";
            });
            if (!banner) return null;
            return banner.image;
        },
        missingUpload() {
            return this.selimg == null && this.featureProduct.data.isFeatured;
        }
    },
    data() {
        return {
            loading: false,
            selimg: null,
            featureProduct: {
                loading: true,
                hasError: false,
                data: {
                    name: "",
                    isFeatured: false,
                    images: []
                }
            }
        };
    },
    methods: {
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
                this.showNotif(false, "Limit image size to 2MB (PNG/JPG).");
            }

            return filtered;
        },

        async getProduct() {
            try {
                const resp = await Product.getProduct(this.$route.params.id);
                this.featureProduct.data = resp;
            } catch (err) {
                this.showNotif(false, "Could not retrieve product details. ");
                this.featureProduct.hasError = true;
            } finally {
                this.featureProduct.loading = false;
            }
        },

        async onSubmit() {
            this.loading = true;
            try {
                if (this.selimg) {
                    // Upload banner and update
                    let fd = new FormData();
                    fd.append("banner", this.selimg);
                    fd.append("imageType", "banner");
                    fd.append(
                        "isFeatured",
                        this.featureProduct.data.isFeatured
                    );
                    await Product.uploadBanner(this.$route.params.id, fd);
                    // clear
                    this.selimg = null;
                } else {
                    // Update only
                    await Product.updateProduct(this.$route.params.id, {
                        isFeatured: this.featureProduct.data.isFeatured
                    });
                }
                this.showNotif(true, "Successfully updated feature config.");
                this.loading = false;
                this.returnToPageIndex("/products");
            } catch (err) {
                this.showNotif(false, "Could not update feature config.");
                this.loading = false;
            }
        },
        imgsRemoved(file) {
            this.selimg = null;
        },
        imgsAdded(file) {
            this.selimg = file[0];
        },
        onImgUploadFailed: function(info) {
            this.showNotif(false, "Failed to add your selected image. ");
        }
    }
};
</script>
