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
                    <q-breadcrumbs separator="|" active-color="white">
                        <q-breadcrumbs-el
                            v-for="stat in orderStats"
                            :key="stat.name"
                            :label="stat.name + '(' + stat.count + ')'"
                            :class="{ 'active-stat': stat.count > 0 }"
                            @click="selectStat(stat)"
                        />
                    </q-breadcrumbs>
                </div>
            </div>
            <div class="content-2">
                <q-table
                    square
                    class="orders-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :pagination.sync="pagination"
                    :rows-per-page-options="[0]"
                    :loading="loading"
                    @request="onRequest"
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
                                    :class="
                                        'chip-' + props.row.status.toLowerCase()
                                    "
                                >
                                    {{ props.row.status }}
                                </q-chip>
                            </q-td>
                            <q-td key="target" :props="props">
                                {{ props.row.target }}
                            </q-td>
                            <q-td key="customer" :props="props">
                                {{ props.row.customer }}
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
                                    :to="
                                        '/orders/process/' + props.row.ordernum
                                    "
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
                        @click="updateMonth"
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
.orders-table td .chip-placed {
    background: $primary;
}
.orders-table td .chip-accepted,
.orders-table td .chip-processing {
    background: #ff9800;
}
.orders-table td .chip-fulfilled {
    background: #009688;
}
.orders-table td .chip-cancelled {
    background: #e57373;
}
</style>
<script>
import MonthPicker from "../../components/MonthPicker";
import HelperMixin from "../../mixins/helpers";

export default {
    name: "OrderIndex",
    components: { MonthPicker },
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Orders"
        };
    },
    created() {
        if (this.$route.query.m) {
            let timestamp = Date.parse(this.$route.query.m);
            if (isNaN(timestamp) == false) {
                this.selDate = new Date(timestamp);
                this.updateMonth();
            }
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
            showSelect: false,
            minDate: new Date(2010, 0),
            maxDate: new Date(dateToday.getFullYear() + 10, 11),
            selDate: dateToday,
            selectedMonth:
                dateToday.getFullYear() +
                "-" +
                (dateToday.getMonth() + 1).toString().padStart(2, 0),
            orderStats: [
                { name: "Placed", count: 122 },
                { name: "accepted", count: 2 },
                { name: "Processing", count: 0 },
                { name: "fulfilled", count: 7 },
                { name: "cancelled", count: 2 }
            ],
            loading: false,
            pagination: {
                sortBy: "ordernum",
                descending: true,
                page: 1,
                rowsPerPage: 10,
                rowsNumber: 10
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
            original: [
                {
                    ordernum: "507f1f77bcf86cd799439011",
                    status: "Placed",
                    target: "Feb 20, 2020",
                    customer: "John",
                    total: 1000
                },
                {
                    ordernum: 2,
                    status: "Processing",
                    target: "Feb 20, 2020",
                    customer: "John",
                    total: 3000
                },
                {
                    ordernum: 1,
                    status: "fulfilled",
                    target: "Feb 20, 2020 10:30",
                    customer: "AAAAAAA",
                    total: 2000
                },
                {
                    ordernum: 22,
                    status: "Cancelled",
                    target: "Feb 10, 2020 10:30",
                    customer: "AAA",
                    total: 200.5
                }
            ]
        };
    },
    methods: {
        selOrders: function(date) {},
        filterMonth(val) {
            let searchQry = Object.assign({}, this.$route.query, { m: val });
            if (!val) delete searchQry.m;

            this.$router
                .replace({
                    query: searchQry
                })
                .catch(err => {});

            /** TODO */
            // add filtering logic
        },
        updateMonth: function(evt) {
            if (this.selDate) {
                this.selectedMonth =
                    this.selDate.getFullYear() +
                    "-" +
                    (this.selDate.getMonth() + 1).toString().padStart(2, 0);
                this.filterMonth(this.selectedMonth);
            }
        },
        selectStat: function(stat) {
            if (stat && stat.count) {
                // console.log(stat.name, stat.count);
                let searchQry = Object.assign({}, this.$route.query, {
                    s: stat.name
                });
                if (!stat.name) delete searchQry.s;

                this.$router
                    .replace({
                        query: searchQry
                    })
                    .catch(err => {});

                /** TODO */
                // add filtering logic
            }
        },
        /**TODO */
        onRequest(props) {
            const { page, rowsPerPage, sortBy, descending } = props.pagination;
            console.log(page, rowsPerPage, sortBy, descending);
            const filter = props.filter;

            this.loading = true;

            // emulate server
            setTimeout(() => {
                // update rowsCount with appropriate value
                this.pagination.rowsNumber = this.getRowsNumberCount(filter);

                // get all rows if "All" (0) is selected
                const fetchCount =
                    rowsPerPage === 0
                        ? this.pagination.rowsNumber
                        : rowsPerPage;

                // calculate starting row of data
                const startRow = (page - 1) * rowsPerPage;

                // fetch data from "server"
                const returnedData = this.fetchFromServer(
                    startRow,
                    fetchCount,
                    filter,
                    sortBy,
                    descending
                );

                // clear out existing data and add new
                this.data.splice(0, this.data.length, ...returnedData);

                // don't forget to update local pagination object
                this.pagination.page = page;
                this.pagination.rowsPerPage = rowsPerPage;
                this.pagination.sortBy = sortBy;
                this.pagination.descending = descending;

                // ...and turn of loading indicator
                this.loading = false;
            }, 500);
        },

        // emulate ajax call
        fetchFromServer(startRow, count, filter, sortBy, descending) {
            const data = filter
                ? this.original.filter(row => row.name.includes(filter))
                : this.original.slice();

            // handle sortBy
            if (sortBy) {
                const sortFn = () => {
                    if (sortBy === "name") {
                        if (descending) {
                            (a, b) =>
                                a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
                        } else {
                            (a, b) =>
                                a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                        }
                    }
                };
                data.sort(sortFn);
            }

            return data.slice(startRow, startRow + count);
        },

        getRowsNumberCount(filter) {
            if (!filter) {
                return this.original.length;
            }
            let count = 0;
            this.original.forEach(item => {
                if (item.name.includes(filter)) {
                    ++count;
                }
            });
            return count;
        }
    }
};
</script>
