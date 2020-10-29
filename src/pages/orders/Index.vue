<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Orders</h6>
                <br />
                <p>
                    The following is a list of orders for the selected month.
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
                <div class="filter-orders">
                    <q-btn
                        flat
                        round
                        icon="post_add"
                        class="q-mr-sm"
                        to="/orders/add"
                    >
                        <q-tooltip
                            anchor="bottom right"
                            self="top middle"
                            :offset="[10, 10]"
                            >Add Order</q-tooltip
                        >
                    </q-btn>
                    <q-input
                        readonly
                        v-model="selectedMonth"
                        debounce="500"
                        @click="showSelect = true"
                        dark
                        dense
                        outlined
                    >
                        <template v-slot:prepend>
                            <q-icon name="event" />
                        </template>
                    </q-input>
                </div>
                <div class="order-stats q-ml-sm">
                    <p class="text-subtitle2" v-if="loadingStats">
                        <q-spinner color="white" size="2.45em" />
                    </p>
                    <q-breadcrumbs separator="|" active-color="white" v-else>
                        <q-breadcrumbs-el
                            v-for="stat in orderStats"
                            :key="stat.name"
                            :label="stat.name + '(' + stat.count + ')'"
                            :class="{ 'active-stat': stat.count > 0 }"
                            @click="onSelectStatus(stat)"
                        />
                    </q-breadcrumbs>
                </div>
            </div>
            <div class="content-2">
                <q-table
                    ref="ordersTbl"
                    square
                    class="orders-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :pagination.sync="pagination"
                    :rows-per-page-options="[0]"
                    :loading="loading"
                    @request="onRequest"
                    @update:pagination="onChgPage"
                    binary-state-sort
                >
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="ordernum" :props="props">
                                {{ props.row.ordernum }}
                            </q-td>
                            <q-td key="status" :props="props">
                                <q-chip
                                    square
                                    :class="'chip-' + props.row.class"
                                >
                                    {{ props.row.status }}
                                </q-chip>
                            </q-td>
                            <q-td key="target" :props="props">
                                {{ props.row.target }}
                            </q-td>
                            <q-td
                                key="customer"
                                class="capitalize"
                                :props="props"
                            >
                                {{ props.row.customer }} ({{ props.row.type }})
                            </q-td>
                            <q-td key="total" :props="props">
                                {{ props.row.total }}
                            </q-td>
                            <q-td>
                                <q-btn
                                    dense
                                    flat
                                    round
                                    icon="build"
                                    class="q-mr-sm"
                                    :to="'/orders/process/' + props.row.id"
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
        <q-dialog v-model="showSelect" seamless persistent>
            <q-card dark>
                <MonthPicker
                    color="primary"
                    locale="en-US"
                    :min="minDate"
                    :max="maxDate"
                    v-model="selDate"
                ></MonthPicker>
                <q-card-actions align="right">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn
                        flat
                        label="OK"
                        color="primary"
                        @click="onUpdateMonth"
                        v-close-popup
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
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
    grid-template-columns: 1fr;
    grid-template-areas:
        "content-1"
        "content-2";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.content-2 {
    grid-area: content-2;
    min-width: 160px;
}
.monthpicker {
    background: #424242;
    color: #fff;
}
.filter-orders {
    display: flex;
}
@media (max-width: 400px) {
    .page-heading {
        grid-template-columns: 1fr;
        grid-template-areas:
            "heading-caption"
            "heading-stat-1";
    }
    .page-contents {
        grid-template-columns: 1fr;
    }
}
@media (min-width: 1820px) {
    .page-heading {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas: "heading-caption heading-caption heading-stat-1 .";
    }
    .page-contents {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas:
            "content-1 content-1 . . "
            "content-2 content-2 content-2 .";
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
}
</style>
<style lang="scss">
.order-stats .q-breadcrumbs {
    text-transform: capitalize;
}
.order-stats .active-stat {
    cursor: pointer;
}
.order-stats .active-stat:hover {
    text-decoration: underline;
}
.orders-table {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
.orders-table th:last-child,
.orders-table td:last-child {
    background: $grey-8;
    position: sticky;
    right: 0;
    z-index: 1;
}
.orders-table td {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.orders-table td div[class*="chip-"] {
    text-transform: capitalize;
    color: #fff;
}
.orders-table td .chip- {
    &placed {
        background: $primary;
    }
    &accepted {
        background: $accepted;
    }
    &cancelled {
        background: $cancelled;
    }
    &replaced {
        background: $replaced;
    }
    &preparing {
        background: $preparing;
    }
    &finalizing {
        background: $finalizing;
    }
    &out-for-delivery {
        background: $out-for-delivery;
    }
    &ready-for-pickup {
        background: $ready-for-pickup;
    }
    &fulfilled {
        background: $fulfilled;
    }
}
</style>
<script>
import MonthPicker from "../../components/MonthPicker";
import HelperMixin from "../../mixins/helpers";
let Order = null;

export default {
    name: "OrderIndex",
    components: { MonthPicker },
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Orders"
        };
    },
    beforeCreate() {
        Order = this.$RepositoryFactory.get("orders");
    },
    created() {
        if (this.$route.query.m) {
            let timestamp = Date.parse(this.$route.query.m);
            if (isNaN(timestamp) == false) {
                this.selDate = new Date(timestamp);
                this.selectedMonth =
                    this.selDate.getFullYear() +
                    "-" +
                    (this.selDate.getMonth() + 1).toString().padStart(2, 0);
            }
        }
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
        }
        if (this.$route.query.p && !isNaN(this.$route.query.p)) {
            this.pagination.page = Number.parseInt(this.$route.query.p);
        }

        if (process.env.CLIENT) {
            this.getOrderStats();
        }
    },
    mounted() {
        this.onRequest({
            pagination: this.pagination,
            filter: undefined
        });
    },
    data() {
        const dateToday = new Date();
        return {
            loading: false,
            loadingStats: true,
            showSelect: false,
            minDate: new Date(2010, 0),
            maxDate: new Date(dateToday.getFullYear() + 10, 11),
            selDate: dateToday,
            search: "",
            selectedMonth:
                dateToday.getFullYear() +
                "-" +
                (dateToday.getMonth() + 1).toString().padStart(2, 0),
            orderStats: [],
            pagination: {
                sortBy: "target",
                descending: true,
                page: 1,
                rowsPerPage: 9
            },
            columns: [
                {
                    name: "ordernum",
                    field: "ordernum",
                    required: true,
                    label: "Order#",
                    align: "left",
                    sortable: true
                },
                {
                    name: "status",
                    field: "status",
                    align: "left",
                    label: "Status",
                    sortable: true
                },
                {
                    name: "target",
                    field: "target",
                    align: "left",
                    label: "Target Date",
                    sortable: true
                },
                {
                    name: "customer",
                    field: "customer",
                    align: "left",
                    label: "Customer",
                    sortable: true
                },
                {
                    name: "total",
                    field: "total",
                    align: "left",
                    label: "Total",
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
        selOrders: function(date) {},
        filterMonth(val) {
            let searchQry = Object.assign({}, this.$route.query, { m: val });
            if (!val) delete searchQry.m;
            delete searchQry.p;

            this.$router
                .replace({
                    query: searchQry
                })
                .catch(err => {});

            this.getOrderStats();
            this.$refs["ordersTbl"].requestServerInteraction({
                pagination: { ...this.pagination, page: 1 }
            });
        },

        onUpdateMonth: function(evt) {
            if (this.selDate) {
                this.selectedMonth =
                    this.selDate.getFullYear() +
                    "-" +
                    (this.selDate.getMonth() + 1).toString().padStart(2, 0);
                this.filterMonth(this.selectedMonth);
            }
        },

        onSelectStatus(stat) {
            if (stat && stat.count) {
                this.search = stat.name;
                let searchQry = Object.assign({}, this.$route.query, {
                    s: stat.name
                });
                if (!stat.name) delete searchQry.s;
                delete searchQry.p; // Reset page

                this.$router
                    .replace({
                        query: searchQry
                    })
                    .catch(err => {});

                this.$refs["ordersTbl"].requestServerInteraction({
                    pagination: { ...this.pagination, page: 1 }
                });
            }
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

        async getOrderStats() {
            this.loadingStats = true;
            try {
                const resp = await Order.getOrderStats(this.selDate);
                this.orderStats = resp.slice();
            } catch (err) {
                this.showNotif(false, "Could not retrieve order statistics. ");
            } finally {
                this.loadingStats = false;
            }
        },

        async onRequest(props) {
            this.loading = true;
            try {
                const resp = await Order.getOrders(this.selDate, this.search);
                this.original = resp;
                this.data = this.original.slice();
                this.pagination.page = props.pagination.page;
            } catch (err) {
                this.showNotif(false, "Could not retrieve list of orders. ");
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
