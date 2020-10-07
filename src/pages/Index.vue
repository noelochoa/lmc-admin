<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Dashboard</h6>
                <br />
                <p>Here are some of the recent activities in your shop.</p>
            </div>
            <div class="heading-stat-1 text-caption">
                Accounts
                <br />
                <p class="text-subtitle2" v-if="stats.loading">
                    <q-spinner color="white" size="2em" />
                </p>
                <p class="text-subtitle2" v-else-if="stats.customers.hasError">
                    Error retrieving data.
                </p>
                <p class="text-subtitle2" v-else>
                    {{ stats.customers.data.regular }} Customers <br />
                    {{ stats.customers.data.reseller }} Resellers
                </p>
            </div>
            <div class="heading-stat-2 text-caption">
                Products
                <p class="text-subtitle2" v-if="stats.loading">
                    <q-spinner color="white" size="2em" />
                </p>
                <p class="text-subtitle2" v-else-if="stats.products.hasError">
                    Error retrieving data.
                </p>
                <p class="text-subtitle2" v-else>
                    {{ stats.products.data.active }} Active /
                    {{ stats.products.data.total }} Total
                </p>
            </div>
            <div class="heading-stat-3 text-caption">
                Orders this Month
                <p class="text-subtitle2" v-if="stats.loading">
                    <q-spinner color="white" size="2em" />
                </p>
                <p class="text-subtitle2" v-else-if="stats.orders.hasError">
                    Error retrieving data.
                </p>
                <p class="text-subtitle2" v-else>
                    {{ stats.orders.data.accepted }} Accepted <br />
                    {{ stats.orders.data.placed }} Placed
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Resellers for Approval
                </div>
                <div>
                    <p v-if="pending.loading" class="flex flex-center">
                        <q-spinner color="white" class="q-mt-sm" size="2em" />
                    </p>
                    <p
                        v-else-if="pending.hasError"
                        class="flex flex-center q-mt-md"
                    >
                        Error retrieving data.
                    </p>
                    <p
                        v-else-if="pending.data.length < 1"
                        class="text-center q-mt-md"
                    >
                        No pending accounts
                    </p>
                    <q-list separator v-else>
                        <Accounts
                            v-for="account in pending.data"
                            :key="account.id"
                            v-bind="account"
                        />
                    </q-list>
                </div>
                <div v-if="!stats.loading && pending.data.length > 0">
                    <q-item
                        to="/accounts"
                        dense
                        class="text-center flex flex-center"
                    >
                        see all
                    </q-item>
                </div>
            </div>
            <div class="content-2">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="cake" class="caption-icon q-mx-md" />
                    Products Statistics
                </div>
                <div>
                    <p v-if="stats.loading" class="flex flex-center">
                        <q-spinner color="white" class="q-mt-sm" size="2em" />
                    </p>
                    <p
                        v-else-if="stats.products.hasError"
                        class="flex flex-center q-mt-md"
                    >
                        Error retrieving data.
                    </p>
                    <q-list separator v-else>
                        <Statistic
                            v-for="stat in productStats"
                            :key="stat.label"
                            v-bind="stat"
                        />
                    </q-list>
                </div>
                <div v-if="!stats.loading && !stats.products.hasError">
                    <q-item
                        to="/products"
                        dense
                        class="text-center flex flex-center"
                    >
                        see all
                    </q-item>
                </div>
            </div>
            <div class="content-3">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="fireplace"
                        class="caption-icon q-mx-md"
                    />Orders Statistics
                </div>
                <div>
                    <p v-if="stats.loading" class="flex flex-center">
                        <q-spinner color="white" class="q-mt-sm" size="2em" />
                    </p>
                    <p
                        v-else-if="stats.orders.hasError"
                        class="flex flex-center q-mt-md"
                    >
                        Error retrieving data.
                    </p>
                    <q-list separator v-else>
                        <Statistic
                            v-for="stat in orderStats"
                            :key="stat.label"
                            v-bind="stat"
                        />
                    </q-list>
                </div>
                <div v-if="!stats.loading && !stats.orders.hasError">
                    <q-item
                        to="/orders"
                        dense
                        class="text-center flex flex-center"
                    >
                        see all
                    </q-item>
                </div>
            </div>
            <div class="content-4">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="comment" class="caption-icon q-mx-md" />Recent
                    Comments
                </div>
                <div>
                    <p v-if="recent.loading" class="flex flex-center">
                        <q-spinner color="white" class="q-mt-sm" size="2em" />
                    </p>
                    <p
                        v-else-if="recent.hasError"
                        class="flex flex-center q-mt-md"
                    >
                        Error retrieving data.
                    </p>
                    <p
                        v-else-if="recent.data.length < 1"
                        class="text-center q-mt-md"
                    >
                        No recent comments
                    </p>
                    <q-list separator v-else>
                        <Comments
                            v-for="comment in recent.data"
                            :key="comment.id"
                            v-bind="comment"
                        />
                    </q-list>
                </div>
                <div v-if="!recent.loading && recent.data.length > 0">
                    <q-item
                        to="/comments"
                        dense
                        class="text-center flex flex-center"
                    >
                        see all
                    </q-item>
                </div>
            </div>
            <div class="content-5">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="calendar_today"
                        class="caption-icon q-mx-md"
                    />Business Holidays
                </div>
                <div class="bg-gray-alpha">
                    <q-item dense class="q-px-lg q-pt-lg no-select">
                        <q-item-section>
                            <q-item-label>{{ today.month }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-item-label class="text-primary">{{
                                today.year
                            }}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-date
                        class="date"
                        :value="today.yyyymmdd"
                        :events="holidaysEvt"
                        mask="YYYY-MM-DD"
                        event-color="orange"
                        flat
                        minimal
                        readonly
                    />
                </div>
                <div>
                    <q-item
                        to="/holidays"
                        dense
                        class="text-center flex flex-center"
                    >
                        see all
                    </q-item>
                </div>
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
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-template-areas: "heading-caption heading-stat-1 heading-stat-2 heading-stat-3";
    grid-column-gap: 1rem;
}

.heading-caption {
    grid-area: heading-caption;
}
.heading-stat-1 {
    grid-area: heading-stat-1;
}
.heading-stat-2 {
    grid-area: heading-stat-2;
}
.heading-stat-3 {
    grid-area: heading-stat-3;
}
.page-contents {
    grid-template-columns: repeat(3, minmax(240px, 480px));
    grid-template-areas:
        "content-1 content-2 content-3"
        "content-4 content-4 content-5";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
}
.content-2 {
    grid-area: content-2;
}
.content-3 {
    grid-area: content-3;
}
.content-4 {
    grid-area: content-4;
}
.content-5 {
    grid-area: content-5;
    max-width: 360px;
}
div[class*="content-"] {
    display: flex;
    flex-direction: column;
}
div[class*="content-"] > div {
    min-height: 4em;
    justify-content: left;
    background: rgba(128, 128, 128, 0.35);
    margin: 1px 0;
    width: 100%;
}
div[class*="content-"] > div:nth-child(2) {
    min-height: 3.5em;
    background: rgba(128, 128, 128, 0.55);
}

div[class*="content-"] > div:nth-child(3) {
    min-height: 1rem;
}

.caption-icon {
    font-size: 2.5rem;
    display: inline-flex;
}
.date {
    width: 100%;
    min-width: 240px;
    max-height: 250px;
    background: none;
}

@media (max-width: 1140px) {
    .page-contents {
        grid-template-columns: repeat(2, minmax(240px, 1fr));
        grid-template-areas:
            "content-1 content-1"
            "content-2 content-3"
            "content-4 content-4"
            "content-5 content-5";
    }
    .page-heading {
        grid-template-columns: 2fr repeat(3, 1fr);
    }
}
@media (max-width: 850px) {
    .page-contents {
        grid-template-columns: 100%;
        grid-template-areas:
            "content-1"
            "content-2"
            "content-3"
            "content-4"
            "content-5";
    }
    .page-heading {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media (max-width: 580px) {
    .page-heading {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "heading-caption heading-caption heading-caption"
            "heading-stat-1 heading-stat-2 heading-stat-3";
    }
}
@media (max-width: 320px) {
    .caption-icon {
        display: none;
    }
}

@media (min-width: 1840px) {
    .page-heading {
        grid-template-columns: 744px repeat(3, 248px);
        grid-template-areas: "heading-caption heading-stat-1 heading-stat-2 heading-stat-3";
    }
}
</style>
<script>
import Accounts from "../components/Accounts";
import Statistic from "../components/Statistic";
import Comments from "../components/Comments";
import HelperMixin from "../mixins/helpers";
let Stats = null;

export default {
    preFetch({ store }) {
        // return store.dispatch("auth/getCustomerStats");
    },
    name: "DashboardIndex",

    components: { Accounts, Statistic, Comments },
    mixins: [HelperMixin],
    beforeCreate() {
        Stats = this.$RepositoryFactory.get("statistics");
    },
    created() {
        if (process.env.CLIENT) this.getStats();
    },
    computed: {
        holidaysEvt() {
            const dayList = new Set();
            this.holidays.data.map(item => {
                const start = this.findMaxDt(item.start, this.startDayOfMonth);
                const end = this.findMinDt(item.end, this.lastDayOfMonth);
                // console.log(start, end);
                for (
                    let dt = start;
                    dt.getTime() <= end.getTime();
                    dt.setDate(dt.getDate() + 1)
                ) {
                    dayList.add(this.toQDateFormat(dt));
                }
            });
            // console.log(dayList);
            return [...dayList];
        }
    },
    data() {
        return {
            stats: {
                loading: true,
                customers: {
                    hasError: false,
                    data: {}
                },
                products: {
                    hasError: false,
                    data: {}
                },
                orders: {
                    hasError: false,
                    data: {}
                }
            },
            pending: {
                loading: true,
                hasError: false,
                data: []
            },
            productStats: [
                {
                    label: "Featured Products",
                    value: 0,
                    link: "/products/?st=featured",
                    key: "featured"
                },
                {
                    label: "Active Products",
                    value: 0,
                    link: "/products/?st=active",
                    key: "active"
                },
                {
                    label: "Total Products",
                    value: 0,
                    link: "/products",
                    key: "total"
                }
            ],
            orderStats: [
                {
                    label: "Orders Placed",
                    value: 0,
                    link: "/orders/placed",
                    key: "placed"
                },
                {
                    label: "Orders Accepted",
                    value: 0,
                    link: "/orders/accepted",
                    key: "accepted"
                },
                {
                    label: "Orders Processed",
                    value: 0,
                    link: "/orders/processed",
                    key: "processed"
                },
                {
                    label: "Orders Fulfilled",
                    value: 0,
                    link: "/orders/fulfilled",
                    key: "fulfilled"
                }
            ],
            recent: {
                loading: true,
                hasError: false,
                data: []
            },
            holidays: {
                loading: true,
                hasError: false,
                data: []
            }
        };
    },
    methods: {
        async getStats() {
            [
                this.stats.customers,
                this.stats.products,
                this.stats.orders,
                this.pending,
                this.recent,
                this.holidays
            ] = await Promise.all([
                Stats.getCustomerStats(),
                Stats.getProductStats(),
                Stats.getOrderStats(),
                Stats.getPendingResellers(),
                Stats.getRecentComments(),
                Stats.getBusinessHolidays()
            ]);
            this.productStats.map(item => {
                item.value = this.stats.products.data[item.key];
                return item;
            });
            this.orderStats.map(item => {
                item.value = this.stats.orders.data[item.key];
                return item;
            });
            this.stats.loading = false;
            this.pending.loading = false;
            this.recent.loading = false;
            this.holidays.loading = false;
        }
    }
};
</script>
