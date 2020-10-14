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
                    @input="filterChanged"
                    dark
                    dense
                    outlined
                    options-dense
                >
                    <template v-slot:prepend>
                        <q-icon name="category" />
                    </template>
                    <template v-slot:after-options>
                        <q-item dense to="/categories/add" class="q-pt-xs">
                            <q-icon name="add" color="white" class="q-mr-sm" />
                            Add category
                        </q-item>
                    </template>
                </q-select>
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
                    :filter="nameFilter"
                    :loading="loading"
                    @request="onRequest"
                >
                    <template v-slot:top-right>
                        <q-btn
                            dense
                            flat
                            size="sm"
                            icon="edit"
                            label="Bulk edit"
                            class="q-pr-xs"
                        >
                        </q-btn>
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
                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
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
                                        icon="star_outline"
                                        :to="
                                            '/products/feature/' + props.row.id
                                        "
                                    >
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Feature this product
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="visibility_off"
                                        @click="confirmAction(props.row.id)"
                                        ><q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Hide this category
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
                    <template v-slot:message>
                        This action will archive this category. <br />
                        Product will no longer be visible in the category page.
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
        "content-1 . . content-2"
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

export default {
    name: "ProductIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    preFetch({ store }) {
        console.log("prefetch called");
    },
    meta() {
        return {
            title: "Products"
        };
    },
    created() {
        if (this.$route.query.type) {
            this.filter.forEach(el => {
                if (el.match(new RegExp(this.$route.query.type, "i"))) {
                    this.customerFilter = el;
                }
            });
        }
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
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
            searchReq: null,
            nameFilter: "",
            category: "All",
            filter: ["All", "Cakes", "Cookies", "Others"],
            loading: false,
            showDlg: false,
            toFlagID: -1,
            pagination: {
                sortBy: "created",
                descending: true,
                page: 1,
                rowsPerPage: 10
            },
            columns: [
                {
                    name: "name",
                    required: true,
                    label: "Name",
                    align: "left",
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
                    name: "price",
                    field: "price",
                    align: "left",
                    label: "Base price",
                    sortable: true
                }
            ],
            data: [],
            original: [
                {
                    id: 1,
                    name: "Product name1",
                    price: "2500",
                    category: "Product Name 123",
                    created: "April 4, 2020"
                },
                {
                    id: 2,
                    name: "Product name2",
                    price: "1200",
                    category: "Product Name 123",
                    created: "Mar 4, 2020"
                },
                {
                    id: 3,
                    name: "Product name3",
                    price: "1200",
                    category: "Product Name 123",
                    created: "Feb 4, 2020"
                },
                {
                    id: 4,
                    name: "Product name4",
                    price: "1200",
                    category: "Product Name 123",
                    created: "April 4, 2020"
                }
            ]
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
        },
        searchClear(evt) {
            let query = Object.assign({}, this.$route.query);
            delete query.s;
            this.$router.replace({ query }).catch(err => {});
            this.search = "";
        },
        searchInput(val) {
            /** TODO */
            let searchQry = Object.assign({}, this.$route.query, { s: val });
            if (!val) delete searchQry.s;

            this.$router.replace({ query: searchQry }).catch(err => {});
        },
        /**TODO */
        onRequest(props) {
            this.loading = true;

            // emulate server
            setTimeout(() => {
                // clear out existing data and add new
                this.data = this.original;
                this.loading = false;
            }, 500);
        },
        confirmAction(productID) {
            this.showDlg = true;
            this.toFlagID = productID;
        },
        onProceed() {
            if (this.toFlagID !== -1) {
                /**TODO */
                this.showNotif(true, "Successfully hidden product.");
            }
            // Reset
            this.toFlagID = -1;
        }
    }
};
</script>
