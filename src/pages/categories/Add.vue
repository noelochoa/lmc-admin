<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Add Category</h6>
                <br />
                <p>
                    Fill out the form to create a new category in the webstore.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />New Category Info
                </div>
                <div>
                    <q-form @submit.prevent.stop="onSubmit">
                        <q-list class="detail-list" separator>
                            <q-item class="detail-field">
                                <span class="field-label">Category Name</span>
                                <q-input
                                    type="text"
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    placeholder="Field required. "
                                    class="field-value"
                                    v-model="category.name"
                                    lazy-rules
                                    :rules="[
                                        val => val !== null && val.trim() !== ''
                                    ]"
                                />
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Create"
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
    grid-template-columns: minmax(240px, 480px);
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
let Category = null;

export default {
    name: "CategoryAdd",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Add Category"
        };
    },
    beforeCreate() {
        Category = this.$RepositoryFactory.get("categories");
    },
    data() {
        return {
            loading: false,
            category: {
                name: ""
            }
        };
    },
    methods: {
        onSubmit: async function(evt) {
            this.loading = true;
            try {
                await Category.addCategory(this.category);
                this.showNotif(true, "Created new product category.");
                this.returnToPageIndex("/categories");
            } catch (err) {
                this.showNotif(false, "Could not create product category. ");
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
