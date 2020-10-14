<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Product Discount</h6>
                <br />
                <p>
                    The following are product discounts applied in the webstore.
                </p>
            </div>
            <div class="heading-stat-1 text-caption">
                Today
                <br />
                <p class="text-subtitle2">
                    {{ today.human }}
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
                    to="/discounts/add"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add new entry</q-tooltip
                    >
                </q-btn>
                <q-input
                    class="filter-search-box"
                    v-model="search"
                    type="search"
                    placeholder="Search discount"
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
                    class="discounts-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :pagination.sync="pagination"
                    :rows-per-page-options="[0]"
                    :loading="loading"
                    :filter="search"
                    @request="onRequest"
                    @update:pagination="onChgPage"
                    binary-state-sort
                >
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="percent" :props="props">{{
                                props.row.percent
                            }}</q-td>
                            <q-td
                                key="target"
                                :props="props"
                                class="capitalize"
                                >{{ props.row.target }}</q-td
                            >
                            <q-td key="start" :props="props">{{
                                props.row.start
                            }}</q-td>
                            <q-td key="end" :props="props">{{
                                props.row.end
                            }}</q-td>
                            <q-td key="count" :props="props">{{
                                props.row.count
                            }}</q-td>
                            <q-td>
                                <q-btn
                                    dense
                                    flat
                                    round
                                    icon="build"
                                    class="q-mr-sm"
                                    :to="'/discounts/edit/' + props.row.id"
                                >
                                    <q-tooltip
                                        anchor="center right"
                                        self="center left"
                                        :offset="[10, 10]"
                                        >Edit Discount</q-tooltip
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
                                        >Delete Discount
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
                        Continue on removing this discount?<br />
                        Warning: This action is permanent.
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
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "heading-caption heading-stat-1";
    grid-column-gap: 1rem;
}
.heading-caption {
    grid-area: heading-caption;
}
.heading-stat-1 {
    grid-area: heading-stat-1;
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
    max-width: 1200px;
}
.filter-search-box {
    min-width: 237px;
    width: 100%;
}

@media (max-width: 360px) {
    .page-heading {
        grid-template-columns: 1fr;
        grid-template-areas:
            "heading-caption"
            "heading-stat-1";
    }
}
@media (max-width: 1280px) {
    .page-contents {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "content-1 ."
            "content-2 content-2";
    }
}

@media (min-width: 1820px) {
    .page-heading {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas: "heading-caption heading-caption heading-stat-1 .";
    }
}
</style>
<style lang="scss">
.discounts-table {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
.discounts-table th:last-child,
.discounts-table td:last-child {
    background: $grey-8;
    position: sticky;
    right: 0;
    z-index: 1;
}
.discounts-table td {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

<script>
import ConfirmDialog from "../../components/ConfirmDialog";
import HelperMixin from "../../mixins/helpers";
let Discount = null;

export default {
    name: "DiscountsIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    meta() {
        return {
            title: "Product Discounts"
        };
    },
    beforeCreate() {
        Discount = this.$RepositoryFactory.get("discounts");
    },
    created() {
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
        }
        if (this.$route.query.p && !isNaN(this.$route.query.p)) {
            this.pagination.page = Number.parseInt(this.$route.query.p);
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
            discountList: [],
            search: "",
            searchReq: null,
            loading: false,
            showDlg: false,
            toDelID: -1,
            pagination: {
                sortBy: "start",
                descending: true,
                page: 1,
                rowsPerPage: 9
            },
            columns: [
                {
                    name: "percent",
                    field: "percent",
                    label: "Discount %",
                    align: "left",
                    required: true,
                    sortable: true
                },
                {
                    name: "target",
                    field: "target",
                    align: "left",
                    label: "Target Customer",
                    sortable: true
                },
                {
                    name: "start",
                    field: "start",
                    align: "left",
                    label: "Start",
                    sortable: true
                },
                {
                    name: "end",
                    field: "end",
                    align: "left",
                    label: "End",
                    sortable: true
                },
                {
                    name: "count",
                    field: "count",
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
            original: []
        };
    },
    methods: {
        searchClear(evt) {
            let query = Object.assign({}, this.$route.query);
            delete query.s;
            this.$router.replace({ query }).catch(err => {});
            this.search = "";
        },
        searchInput(val) {
            let searchQry = Object.assign({}, this.$route.query, { s: val });
            if (!val) delete searchQry.s;

            this.$router
                .replace({
                    query: searchQry
                })
                .catch(err => {});
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
        async onRequest(props) {
            this.loading = true;
            try {
                const resp = await Discount.getAllDiscounts();
                this.original = resp;
                this.data = this.original.slice();
            } catch (err) {
                this.showNotif(false, "Could not retrieve discounts. ");
            } finally {
                this.loading = false;
            }
        },
        async onRemove() {
            if (this.toDelID !== -1) {
                try {
                    const resp = await Discount.deleteDiscount(this.toDelID);
                    this.showNotif(
                        true,
                        "Successfully removed discount entry."
                    );

                    // Remove from list and Reset
                    this.$delete(
                        this.data,
                        this.data.findIndex(el => el.id == this.toDelID)
                    );
                    this.toDelID = -1;
                } catch (err) {
                    this.showNotif(false, "Could not delete item. ");
                }
            }
        },

        confirmDel(psaID) {
            this.showDlg = true;
            this.toDelID = psaID;
        }
    }
};
</script>
