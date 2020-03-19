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
                <p class="text-subtitle2">
                    %% Customers
                    <br />%% Resellers
                </p>
            </div>
            <div class="heading-stat-2 text-caption">
                Products
                <br />
                <p class="text-subtitle2">%% / %%</p>
            </div>
            <div class="heading-stat-3 text-caption">
                Orders this Month
                <p class="text-subtitle2">
                    %% Accepted
                    <br />%% Placed
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
                    <q-list separator>
                        <Accounts
                            v-for="account in accountsList"
                            :key="account.id"
                            v-bind="account"
                        />
                    </q-list>
                    <p
                        v-if="accountsList.length < 1"
                        class="text-center q-mt-md"
                    >
                        No pending accounts
                    </p>
                </div>
                <div v-if="accountsList.length > 0">
                    <q-item
                        to="/accounts"
                        dense
                        class="text-center flex flex-center"
                        >see all</q-item
                    >
                </div>
            </div>
            <div class="content-2">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="cake" class="caption-icon q-mx-md" />Products
                    Statistics
                </div>
                <div>
                    <q-list separator>
                        <Statistic
                            v-for="stat in productStats"
                            :key="stat.label"
                            v-bind="stat"
                        />
                    </q-list>
                </div>
                <div>
                    <q-item
                        to="/products"
                        dense
                        class="text-center flex flex-center"
                        >see all</q-item
                    >
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
                    <q-list separator>
                        <Statistic
                            v-for="stat in orderStats"
                            :key="stat.label"
                            v-bind="stat"
                        />
                    </q-list>
                </div>
                <div>
                    <q-item
                        to="/orders"
                        dense
                        class="text-center flex flex-center"
                        >see all</q-item
                    >
                </div>
            </div>
            <div class="content-4">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon name="comment" class="caption-icon q-mx-md" />Recent
                    Comments
                </div>
                <div>
                    <q-list separator>
                        <Comments
                            v-for="comment in recentComments"
                            :key="comment.id"
                            v-bind="comment"
                        />
                    </q-list>
                    <p
                        v-if="recentComments.length < 1"
                        class="text-center q-mt-md"
                    >
                        No recent comments
                    </p>
                </div>
                <div v-if="recentComments.length > 0">
                    <q-item
                        to="/comments"
                        dense
                        class="text-center flex flex-center"
                        >see all</q-item
                    >
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
                        mask="YYYY-MM-DD"
                        :events="holidays"
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
                        >see all</q-item
                    >
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
    grid-template-rows: auto;
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
    grid-template-columns: repeat(3, minmax(240px, 1fr));
    grid-template-rows: auto;
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
}
div[class*="content-"] {
    display: flex;
    flex-direction: column;
}
div[class*="content-"] > div {
    min-height: 4em;
    justify-content: left;
    margin: 1px 0;
    background: rgba(128, 128, 128, 0.35);
    width: 100%;
}
div[class*="content-"] > div:nth-child(2) {
    background: $grey-8;
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
        grid-template-columns: 2fr 1fr 1fr 1fr;
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
</style>
<script>
import Accounts from "../components/Accounts";
import Statistic from "../components/Statistic";
import Comments from "../components/Comments";
import HelperMixin from "../mixins/helpers";

export default {
    name: "DashboardIndex",

    components: { Accounts, Statistic, Comments },
    mixins: [HelperMixin],

    data() {
        return {
            accountsList: [
                {
                    id: "1234",
                    name: "John Dont XXXXAAAAXXXXAAAA",
                    joined: "2020/03/01 19:00:00+09:00"
                },
                {
                    id: "1235",
                    name: "Noel Ma Oc.",
                    joined: "2020/02/22 16:40:00+00:00"
                }
            ],
            productStats: [
                {
                    label: "Featured Products",
                    value: 6,
                    link: "/products/featured"
                },
                {
                    label: "Active Products",
                    value: 92,
                    link: "/products/active"
                },
                {
                    label: "Total Products",
                    value: 1222,
                    link: "/products/#"
                }
            ],
            orderStats: [
                {
                    label: "Orders Placed",
                    value: 6,
                    link: "/orders/placed"
                },
                {
                    label: "Orders Accepted",
                    value: 5,
                    link: "/orders/accepted"
                },
                {
                    label: "Orders Processed",
                    value: 5,
                    link: "/orders/processed"
                },
                {
                    label: "Orders Fulfilled",
                    value: 6,
                    link: "/orders/fulfilled"
                }
            ],
            recentComments: [
                {
                    id: "12344",
                    author: "Noel O.",
                    text: "This is a short comment",
                    posted: "2020/02/24 15:00"
                },
                {
                    id: "12346",
                    author: "Noel O.",
                    text:
                        "This is a long comment lorem ipsum ipsumipsumipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum",
                    posted: "2020/03/22 9:00"
                }
            ],
            holidays: ["2020/03/12", "2020/03/29"]
        };
    }
};
</script>
