<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Products</h6>
                <br />
                <p>The following is a list of products in the webstore.</p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <q-btn
                    flat
                    round
                    icon="post_add"
                    class="q-mr-sm"
                    to="/products/add/1"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add Product</q-tooltip
                    >
                </q-btn>
                <q-select
                    class="filter-select"
                    v-model="category"
                    :options="filter"
                    :disable="loading"
                    @input="filterChanged"
                    dark
                    dense
                    outlined
                    options-dense
                >
                    <template v-slot:prepend>
                        <q-icon name="category" />
                    </template>
                    <!-- <template v-slot:after-options>
                        <q-item dense to="/categories/add" class="q-pt-xs">
                            <q-icon name="add" color="white" class="q-mr-sm" />
                            Add category
                        </q-item>
                    </template> -->
                </q-select>
                <q-btn
                    flat
                    round
                    icon="add"
                    class="q-ml-sm"
                    to="/categories/add"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add Category</q-tooltip
                    >
                </q-btn>
            </div>
            <div class="content-2">
                <q-input
                    class="filter-search-box"
                    v-model="search"
                    type="search"
                    placeholder="Search product"
                    debounce="500"
                    @input="searchInput"
                    dark
                    dense
                    outlined
                >
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                    <template v-slot:append>
                        <transition name="fade">
                            <q-icon
                                v-show="search != ''"
                                name="close"
                                class="cursor-pointer"
                                @click="searchClear"
                            />
                        </transition>
                    </template>
                </q-input>
            </div>
            <div class="content-3">
                <q-table
                    ref="prodsTbl"
                    grid
                    grid-header
                    title="Store Products"
                    class="products-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :rows-per-page-options="[0]"
                    :pagination.sync="pagination"
                    :selected.sync="selected"
                    selection="multiple"
                    :filter="search"
                    :loading="loading"
                    @request="onRequest"
                    @update:pagination="onChgPage"
                >
                    <template v-slot:top-right>
                        <q-btn
                            dense
                            flat
                            size="sm"
                            icon="arrow_drop_down"
                            label="Bulk action"
                            class="q-px-xs"
                        >
                            <q-menu content-class="bg-grey-10" auto-close>
                                <q-list dark>
                                    <q-item
                                        dense
                                        clickable
                                        @click="confirmBulkAction(true)"
                                        class="text-caption"
                                    >
                                        <q-item-section>
                                            Reactivate selected
                                        </q-item-section>
                                    </q-item>
                                    <q-item
                                        dense
                                        clickable
                                        class="text-caption"
                                        @click="confirmBulkAction(false)"
                                    >
                                        <q-item-section>
                                            Archive selected
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-btn>
                    </template>
                    <template v-slot:header-small class="tbl-header-small">
                        <q-btn
                            dense
                            flat
                            size="sm"
                            icon="arrow_drop_down"
                            label="Bulk actions"
                            class="q-px-xs"
                        >
                            <q-menu content-class="bg-grey-10" auto-close>
                                <q-list dark>
                                    <q-item
                                        dense
                                        clickable
                                        class="text-caption"
                                    >
                                        <q-item-section>
                                            Show selected
                                        </q-item-section>
                                    </q-item>
                                    <q-item
                                        dense
                                        clickable
                                        class="text-caption"
                                    >
                                        <q-item-section>
                                            Hide selected
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-btn>
                    </template>
                    <template v-slot:item="props">
                        <div
                            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-4"
                        >
                            <q-card class="bg-gray-alpha-2">
                                <q-img
                                    :src="
                                        props.row.images && props.row.images[0]
                                            ? resolveAssetsUrl(
                                                  props.row.images[0].image
                                              )
                                            : 'https://dummyimage.com/640x480/454345/fafafa.png&text=No+Img'
                                    "
                                    basic
                                    class="product-img"
                                >
                                    <div class="absolute-top">
                                        <q-checkbox
                                            dense
                                            color="grey-8"
                                            v-model="props.selected"
                                            class="q-mr-sm"
                                        />{{ props.row.name }}
                                    </div>
                                </q-img>
                                <q-separator />
                                <q-list dense>
                                    <q-item
                                        v-for="col in props.cols.filter(
                                            col => col.name !== 'name'
                                        )"
                                        :key="col.name"
                                    >
                                        <q-item-section>
                                            <q-item-label>{{
                                                col.label
                                            }}</q-item-label>
                                        </q-item-section>
                                        <q-item-section side>
                                            <q-item-label
                                                class="text-primary"
                                                >{{ col.value }}</q-item-label
                                            >
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                                <q-separator />
                                <q-card-actions align="right">
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="build"
                                        :to="'/products/edit/' + props.row.id"
                                    >
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Configure
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        :icon="
                                            props.row.isFeatured
                                                ? 'star'
                                                : 'star_outline'
                                        "
                                        :to="
                                            '/products/feature/' + props.row.id
                                        "
                                    >
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Feature product config
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        :icon="
                                            props.row.toggleFlg
                                                ? 'visibility'
                                                : 'visibility_off'
                                        "
                                        @mouseenter="
                                            props.row.toggleFlg = !props.row
                                                .toggleFlg
                                        "
                                        @mouseleave="
                                            props.row.toggleFlg = !props.row
                                                .toggleFlg
                                        "
                                        @click="
                                            confirmAction(
                                                props.row.id,
                                                !props.row.isActive
                                            )
                                        "
                                    >
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                        >
                                            {{
                                                props.row.isActive
                                                    ? "Archive this product"
                                                    : "Reactivate product"
                                            }}
                                        </q-tooltip>
                                    </q-btn>
                                </q-card-actions>
                            </q-card>
                        </div>
                    </template>
                </q-table>
                <ConfirmDialog :showDlg.sync="showDlg">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="report_problem"
                            color="red-5"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message v-if="targetVal">
                        This action will <u>REACTIVATE</u> the product. <br />
                        Product will be visible again on the webstore.
                    </template>
                    <template v-slot:message v-else>
                        This action will <u>ARCHIVE</u> the product. <br />
                        Product will be hidden in the webstore.
                    </template>
                    <template v-slot:actions>
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn
                            flat
                            label="Proceed"
                            color="red-5"
                            @click="onProceed"
                            v-close-popup
                        />
                    </template>
                </ConfirmDialog>
                <ConfirmDialog :showDlg.sync="showDlgBulk">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="report_problem"
                            color="red-5"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message v-if="targetValBulk">
                        This action will <u>REACTIVATE</u> the selected
                        products. <br />
                        Products will be visible again on the webstore.
                    </template>
                    <template v-slot:message v-else>
                        This action will <u>ARCHIVE</u> the selected products.
                        <br />
                        Products will be hidden in the webstore.
                    </template>
                    <template v-slot:actions>
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn
                            flat
                            label="Proceed"
                            color="red-5"
                            @click="onProceedAll"
                            v-close-popup
                        />
                    </template>
                </ConfirmDialog>
            </div>
        </div>
    </q-page>
</template>
<style lang="scss" scoped>
.page-heading,
.page-contents {
    display: grid;
}
.page-heading {
    grid-template-columns: 1fr;
    grid-template-areas: "heading-caption";
    grid-column-gap: 1rem;
}
.heading-caption {
    grid-area: heading-caption;
}
.page-contents {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "content-1 content-1 . content-2"
        "content-3 content-3 content-3 content-3";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
    min-width: 200px;
    display: flex;
    flex-direction: row;
}
.content-2 {
    grid-area: content-2;
    min-width: 160px;
}
.content-3 {
    grid-area: content-3;
}
.product-img {
    width: 100%;
    max-height: 120px;
}
.absolute-top {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 120px;
    background: rgba(0, 0, 0, 0.2);
}
.filter-select {
    flex: 1;
}

@media (max-width: 410px) {
    .page-contents {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "content-1 ."
            "content-2 ."
            "content-3 content-3";
        grid-row-gap: 1rem;
    }
}
@media (max-width: 360px) {
    .page-heading {
        grid-template-columns: 1fr;
        grid-template-areas:
            "heading-caption"
            "heading-stat-1";
    }
}
@media (min-width: 1820px) {
    .page-contents {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas:
            "content-1 . content-2 . "
            "content-3 content-3 content-3 .";
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
}
</style>
<style lang="scss">
.products-table {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
.q-table__middle thead th {
    padding: 0 10px;
}
@media (max-width: 432px) {
    .q-table__middle {
        display: none;
    }
}
</style>
<script>
import ConfirmDialog from "../../components/ConfirmDialog";
import HelperMixin from "../../mixins/helpers";
let Product = null,
    Category = null;

export default {
    name: "ProductIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    meta() {
        return {
            title: "Products"
        };
    },
    beforeCreate() {
        Category = this.$RepositoryFactory.get("categories");
        Product = this.$RepositoryFactory.get("products");
    },
    created() {
        if (this.$route.query.type) {
            this.category = this.$route.query.type;
        }
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
        }
        if (this.$route.query.p && !isNaN(this.$route.query.p)) {
            this.pagination.page = Number.parseInt(this.$route.query.p);
        }
        if (process.env.CLIENT) {
            this.fetchCategories();
        }
    },
    mounted() {
        this.onRequest({
            pagination: this.pagination,
            filter: undefined
        });
    },
    data() {
        return {
            productsList: [],
            selected: [],
            search: "",
            category: "All",
            filter: ["All"],
            loading: true,
            showDlg: false,
            showDlgBulk: false,
            toToggleID: -1,
            targetVal: false,
            targetValBulk: false,
            pagination: {
                sortBy: "created",
                descending: true,
                page: 1,
                rowsPerPage: 9
            },
            columns: [
                {
                    name: "name",
                    field: "name",
                    label: "Name",
                    align: "left",
                    required: true,
                    sortable: true
                },
                {
                    name: "created",
                    field: "created",
                    align: "left",
                    label: "Created",
                    sortable: true
                },
                {
                    name: "category",
                    field: "category",
                    align: "left",
                    label: "Category",
                    sortable: true
                },
                {
                    name: "basePrice",
                    field: "basePrice",
                    align: "left",
                    label: "Base price",
                    sortable: true
                }
            ],
            data: [],
            original: []
        };
    },
    methods: {
        filterChanged(val) {
            const typeSel = this.$route.query.type;
            if (
                this.filter.includes(val) &&
                (!typeSel || !val.match(new RegExp(typeSel, "i")))
            ) {
                this.$router.replace({ query: { type: val } }).catch(err => {});
                this.search = "";
            }

            this.$refs["prodsTbl"].requestServerInteraction({
                pagination: { ...this.pagination, page: 1 }
            });
        },

        searchClear(evt) {
            let query = Object.assign({}, this.$route.query);
            delete query.s;
            this.$router.replace({ query }).catch(err => {});
            this.search = "";
        },

        searchInput(val) {
            let searchQry = Object.assign({}, this.$route.query, { s: val });
            if (!val) delete searchQry.s;

            this.$router.replace({ query: searchQry }).catch(err => {});
        },

        onChgPage(newPg) {
            let pageQry = Object.assign({}, this.$route.query, {
                p: newPg.page
            });
            if (!newPg) delete pageQry.p;

            this.$router
                .replace({
                    query: pageQry
                })
                .catch(err => {});
        },

        async fetchCategories() {
            try {
                const resp = await Category.getCategoriesSelection();
                this.filter = [...this.filter, ...resp.slice()];

                // Update select value
                const itype = new RegExp(this.$route.query.type, "i");
                const found = this.filter.find(item => {
                    return item.match(itype);
                });
                this.category = found ? found : "";
            } catch (err) {
                this.showNotif(false, "Could not retrieve product categories.");
            }
        },

        async onRequest(props) {
            this.loading = true;
            try {
                const prodResp = await Product.getProducts(this.category);
                this.original = prodResp.products;
                this.data = this.original.slice();
                this.pagination.page = props.pagination.page;
            } catch (err) {
                this.showNotif(false, "Could not retrieve products.");
            } finally {
                this.loading = false;
            }
        },

        confirmAction(productID, bool) {
            this.targetVal = bool;
            this.showDlg = true;
            this.toToggleID = productID;
        },

        confirmBulkAction(bool) {
            this.targetValBulk = bool;
            this.showDlgBulk = true;
        },

        async onProceed() {
            if (this.toToggleID !== -1) {
                try {
                    const resp = await Product.toggleActiveProduct(
                        this.toToggleID,
                        this.targetVal
                    );
                    this.showNotif(
                        true,
                        this.targetVal
                            ? "Product has been reactivated."
                            : "Product has been archived."
                    );

                    // Update list
                    this.data.forEach(el => {
                        if (el.id === this.toToggleID) {
                            el.isActive = this.targetVal;
                            el.toggleFlg = this.targetVal;
                        }
                    });

                    // Reset
                    this.toToggleID = -1;
                    this.targetVal = false;
                } catch (err) {
                    this.showNotif(false, "Could not update this item. ");
                }
            }
        },

        async onProceedAll() {
            if (this.selected && this.selected.length > 0) {
                try {
                    // Extract ID
                    const selectIDs = this.selected.map(item => {
                        return item.id;
                    });
                    const resp = await Product.toggleAll(
                        selectIDs,
                        this.targetValBulk
                    );
                    this.showNotif(
                        true,
                        this.targetValBulk
                            ? "Products have been reactivated."
                            : "Products have been archived."
                    );

                    // Update list
                    this.data.forEach(el => {
                        if (selectIDs.includes(el.id)) {
                            el.isActive = this.targetValBulk;
                            el.toggleFlg = this.targetValBulk;
                        }
                    });

                    // Clear selection & Reset
                    this.selected.splice(0, this.selected.length);
                    this.targetValBulk = false;
                } catch (err) {
                    this.showNotif(false, "Could not update items. " + err);
                }
            }
        }
    }
};
</script>
