<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Customer Accounts</h6>
                <br />
                <p>Here are the registered members of your store.</p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <q-select
                    class="filter-select"
                    v-model="customerFilter"
                    :options="filter"
                    @input="filterChanged"
                    dark
                    dense
                    outlined
                    options-dense
                >
                    <template v-slot:prepend>
                        <q-icon name="person_outline" />
                    </template>
                </q-select>
            </div>
            <div class="content-2">
                <q-input
                    v-model="search"
                    type="search"
                    debounce="500"
                    placeholder="Search Name"
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
                    ref="accntsTbl"
                    square
                    class="customer-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :pagination.sync="pagination"
                    :rows-per-page-options="[0]"
                    :loading="loading"
                    :filter="search"
                    @request="onRequest"
                    @update:pagination="onChgPage"
                >
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="name" :props="props">
                                {{ props.row.name }}
                            </q-td>
                            <q-td key="type" :props="props" class="capitalize">
                                {{ props.row.type }}
                            </q-td>
                            <q-td key="joined" :props="props">
                                {{ props.row.joined }}
                            </q-td>
                            <q-td key="login" :props="props">
                                {{ props.row.login }}
                            </q-td>
                            <q-td key="active" :props="props">
                                <q-btn-toggle
                                    size="sm"
                                    readonly
                                    class="no-pointer-events"
                                    v-model="props.row.active"
                                    :toggle-color="
                                        props.row.active ? 'green-4' : 'red-4'
                                    "
                                    :options="[
                                        { label: 'Active', value: true },
                                        { label: 'Inactive', value: false }
                                    ]"
                                />
                            </q-td>
                            <q-td>
                                <q-btn
                                    dense
                                    flat
                                    round
                                    icon="build"
                                    class="q-mr-sm"
                                    :to="'/accounts/edit/' + props.row.id"
                                >
                                    <q-tooltip
                                        anchor="center right"
                                        self="center left"
                                        :offset="[10, 10]"
                                        >Configure</q-tooltip
                                    >
                                </q-btn>
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
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
    min-width: 160px;
}
.content-2 {
    grid-area: content-2;
    min-width: 160px;
}
.content-3 {
    grid-area: content-3;
}
.content-4 {
    grid-area: content-4;
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
.customer-table {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
.customer-table th:last-child,
.customer-table td:last-child {
    background: $grey-8;
    position: sticky;
    right: 0;
    z-index: 1;
}
.customer-table td {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
<script>
import HelperMixin from "../../mixins/helpers";
let Account = null;

export default {
    name: "AccountsIndex",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Customer Accounts",
            meta: {
                robots: { name: "robots", content: "noindex" }
            }
        };
    },
    beforeCreate() {
        Account = this.$RepositoryFactory.get("accounts");
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
            customerList: [],
            search: "",
            searchReq: null,
            customerFilter: "All",
            filter: ["All", "Regular", "Reseller", "Partner"],
            loading: false,
            pagination: {
                sortBy: "joined",
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
                    name: "type",
                    field: "type",
                    align: "left",
                    label: "Type",
                    sortable: true
                },
                {
                    name: "joined",
                    field: "joined",
                    align: "left",
                    label: "Joined",
                    sortable: true
                },
                {
                    name: "login",
                    field: "login",
                    align: "left",
                    label: "Last Login",
                    sortable: true
                },
                {
                    name: "active",
                    field: "active",
                    align: "center",
                    label: "Status",
                    sortable: true
                },
                {
                    name: "action",
                    align: "left",
                    label: "Action"
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
                this.filter.includes(val) ||
                !typeSel ||
                !val.match(new RegExp(typeSel, "i"))
            ) {
                this.$router.replace({ query: { type: val } }).catch(err => {});
                this.search = "";
            }

            this.$refs["accntsTbl"].requestServerInteraction({
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
                const resp = await Account.getAllAccounts(this.customerFilter);
                this.original = resp;
                this.data = this.original.slice();
                this.pagination.page = props.pagination.page;
            } catch (err) {
                this.showNotif(false, "Could not retrieve account details. ");
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
