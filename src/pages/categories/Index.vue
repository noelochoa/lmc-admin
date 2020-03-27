<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Product Categories</h6>
                <br />
                <p>
                    The following are product categories visible in the
                    webstore.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <q-btn
                    flat
                    round
                    icon="post_add"
                    class="q-mr-sm"
                    to="/categories/add"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add New Category</q-tooltip
                    >
                </q-btn>
                <q-input
                    class="filter-search-box"
                    v-model="search"
                    type="search"
                    placeholder="Search category"
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
            <div class="content-2">
                <q-table
                    square
                    class="categories-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :pagination.sync="pagination"
                    :rows-per-page-options="[0]"
                    :loading="loading"
                    :filter="nameFilter"
                    @request="onRequest"
                    binary-state-sort
                >
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="category" :props="props">{{
                                props.row.category
                            }}</q-td>
                            <q-td key="created" :props="props">{{
                                props.row.created
                            }}</q-td>
                            <q-td key="products" :props="props">{{
                                props.row.products
                            }}</q-td>
                            <q-td>
                                <q-btn
                                    dense
                                    flat
                                    round
                                    icon="build"
                                    class="q-mr-sm"
                                    :to="'/categories/edit/' + props.row.id"
                                >
                                    <q-tooltip
                                        anchor="center right"
                                        self="center left"
                                        :offset="[10, 10]"
                                        >Edit Category</q-tooltip
                                    >
                                </q-btn>
                                <q-btn
                                    dense
                                    flat
                                    round
                                    icon="delete"
                                    @click="confirmDel(props.row.id)"
                                    ><q-tooltip
                                        anchor="bottom right"
                                        self="top middle"
                                        :offset="[10, 10]"
                                        >Delete Category
                                    </q-tooltip>
                                </q-btn>
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
                <ConfirmDialog :showDlg.sync="showDlg">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="delete_forever"
                            color="red-5"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message>
                        Continue on removing this category?<br />
                        Warning: Can not delete categories with products.
                    </template>
                    <template v-slot:actions>
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn
                            flat
                            label="Remove"
                            color="red-5"
                            @click="onRemove"
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
        "content-1 . . ."
        "content-2 content-2 content-2 .";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
    min-width: 160px;
    display: flex;
    flex-direction: row;
}
.content-2 {
    grid-area: content-2;
}
.filter-search-box {
    min-width: 237px;
    width: 100%;
}
@media (max-width: 1280px) {
    .page-contents {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "content-1 ."
            "content-2 content-2";
    }
}
</style>
<style lang="scss">
.categories-table {
    background: rgba(128, 128, 128, 0.25);
    color: #fff;
}
.categories-table th:last-child,
.categories-table td:last-child {
    background: $grey-8;
    position: sticky;
    right: 0;
    z-index: 1;
}
.categories-table td {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

<script>
import ConfirmDialog from "../../components/ConfirmDialog";
import HelperMixin from "../../mixins/helpers";
export default {
    name: "CategoriesIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    preFetch({ store }) {
        console.log("prefetch called");
    },
    meta() {
        return {
            title: "Product Categories"
        };
    },
    created() {
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
            categoryList: [],
            search: "",
            searchReq: null,
            nameFilter: "",
            loading: false,
            showDlg: false,
            toDelID: -1,
            pagination: {
                sortBy: "category",
                page: 1,
                rowsPerPage: 10
            },
            columns: [
                {
                    name: "category",
                    required: true,
                    label: "Category",
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
                    name: "products",
                    field: "products",
                    align: "left",
                    label: "No. of Products",
                    sortable: true
                },
                {
                    name: "actions",
                    align: "left",
                    label: "Actions"
                }
            ],
            data: [],
            original: [
                {
                    id: 1,
                    category:
                        "Cakes CakesCakesCakesCakesCakesCakesCakesCakes  CakesCakesCakesCakes CakesCakesCakes CakesCakes CakesCakesCakes",
                    created: "Feb 20, 2020",
                    products: 10
                },
                {
                    id: 4,
                    category: "Others",
                    created: "Feb 20, 2020",
                    products: 10
                },
                {
                    id: 2,
                    category: "Cupcakes",
                    created: "Feb 20, 2020",
                    products: 10
                },
                {
                    id: 3,
                    category: "Cookies",
                    created: "Feb 20, 2020",
                    products: 10
                }
            ]
        };
    },
    methods: {
        searchClear(evt) {
            this.search = "";
            /** TODO */
            this.$router.replace("/categories").catch(err => {});
        },
        searchInput(val) {
            /** TODO */
            let searchQry = Object.assign({}, this.$route.query, { s: val });
            if (!val) delete searchQry.s;

            this.$router
                .replace({
                    query: searchQry
                })
                .catch(err => {});
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
        confirmDel(psaID) {
            this.showDlg = true;
            this.toDelID = psaID;
        },
        onRemove() {
            if (this.toDelID !== -1) {
                /**TODO */
                this.showNotif(true, "Successfully removed category.");
            }
            // Reset
            this.toDelID = -1;
        }
    }
};
</script>
