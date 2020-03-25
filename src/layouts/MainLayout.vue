<template>
    <q-layout view="hHh lpR fFf" ref="page">
        <div class="blur-bg"></div>
        <q-header class="text-white navheader" :class="{ scrolled: scrolled }">
            <q-toolbar>
                <q-btn
                    dense
                    flat
                    round
                    icon="person_add"
                    class="q-mr-sm"
                    to="/users/add"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add account</q-tooltip
                    >
                </q-btn>
                <q-input
                    debounce="250"
                    v-model="searchText"
                    placeholder="Quick search"
                    dense
                    color="white"
                    class="quick-search"
                    ref="quickSearch"
                    @input="searchFocused = true"
                    @blur="searchFocused = false"
                >
                    <template v-slot:prepend>
                        <q-icon name="search" color="white" />
                    </template>
                    <template v-slot:append>
                        <transition name="fade">
                            <q-icon
                                v-show="searchText != ''"
                                color="white"
                                name="close"
                                @click="searchText = ''"
                                class="cursor-pointer"
                            />
                        </transition>
                    </template>
                </q-input>

                <q-toolbar-title>
                    Welcome,
                    <b class="alias">{{ name }}</b>
                </q-toolbar-title>
                <transition name="fade">
                    <q-btn
                        dense
                        flat
                        round
                        icon="menu"
                        side="right"
                        v-show="showNavBtn"
                        class="nav-toggle-btn"
                        @click="drawer = !drawer"
                    />
                </transition>
                <q-btn
                    dense
                    flat
                    round
                    icon="settings"
                    side="right"
                    class="settings-toggle-btn q-ml-xs"
                >
                    <q-menu square :offset="[10, 11]" dark>
                        <div class="row no-wrap q-pa-sm">
                            <div class="column">
                                <q-item
                                    clickable
                                    v-ripple
                                    tag="a"
                                    class="flex-center adjust-content-left"
                                    to="/users/edit"
                                    >Edit Name</q-item
                                >
                                <q-item
                                    clickable
                                    v-ripple
                                    tag="a"
                                    class="flex-center"
                                    to="/users/changepw"
                                    >Change Password</q-item
                                >
                            </div>
                            <q-separator
                                vertical
                                inset
                                class="q-mx-lg"
                                color="white"
                            />
                            <div class="column items-center">
                                <div
                                    class="text-subtitle1 q-mt-sm q-mb-sm alias"
                                >
                                    {{ name }}
                                </div>
                                <q-btn
                                    color="primary"
                                    label="Logout"
                                    size="md"
                                    v-close-popup
                                />
                            </div>
                        </div>
                    </q-menu>
                </q-btn>
            </q-toolbar>
            <SearchResults v-bind="{ showSearch, searchResults }" />
        </q-header>

        <q-drawer
            v-model="drawer"
            show-if-above
            :width="240"
            :breakpoint="767"
            class="bg-gray-alpha"
            :class="{ 'sm-layout': showNavBtn }"
            @on-layout="drawerLayoutChange"
        >
            <q-list class="nav-list">
                <q-item-label header class="text-grey-5"
                    >Navigation</q-item-label
                >
                <Navigation
                    v-for="link in navigationlinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s;
}
.slide-leave-active {
    position: absolute;
}
.slide-move {
    transition: transform 0.5s;
}
.slide-enter {
    transform: translateY(30px);
    opacity: 0;
}
.slide-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

.no-select {
    user-select: none;
}
.blur-bg {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url("../statics/bg-cms.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    transform: scale(1.1);
}
.q-drawer-container,
.q-drawer,
.q-toolbar,
.bg-gray-alpha,
.navheader {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
.bg-gray-alpha-2 {
    background: rgba(128, 128, 128, 0.55);
}
.sm-layout .q-drawer {
    background: #1a1d1a !important;
}

.q-toolbar__title {
    font-size: 16px;
}
.q-drawer {
    position: fixed;
}
.scrolled {
    background: #1a1d1a !important;
}
.quick-search {
    font-size: 12px;
    width: 185px;
}
.quick-search .q-placeholder {
    color: white;
}
.adjust-content-left {
    justify-content: left;
}
.alias {
    text-transform: capitalize;
}
.q-drawer .q-router-link--active {
    border-right: 3px solid $primary;
}

@media (max-width: 480px) {
    .quick-search {
        display: none;
    }
}
</style>

<script>
import Navigation from "../components/Navigation";
import SearchResults from "../components/SearchResults";

export default {
    preFetch({ store, redirect }) {
        if (!store.state.auth.authenticated) {
            redirect("/login");
        }
    },

    name: "MainLayout",
    components: { Navigation, SearchResults },
    computed: {
        name() {
            return this.$store.state.auth.name;
        },
        showSearch() {
            // return false;
            return this.searchFocused && this.searchText.trim() !== "";
        }
    },
    mounted() {
        this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    meta: {
        title: "Home",
        titleTemplate: title => `${title} | LMC Admin Portal`,
        // meta tags
        meta: {
            description: {
                name: "description",
                content: "Content Management System for LMC"
            },
            keywords: { name: "keywords", content: "cms lmc admin portal" },
            equiv: {
                "http-equiv": "Content-Type",
                content: "text/html; charset=UTF-8"
            }
        }
    },

    data() {
        return {
            searchText: "",
            searchFocused: false,
            eventTimer: null,
            scrolled: false,
            drawer: false,
            showNavBtn: false,

            searchResults: [
                {
                    category: "Categories Categories",
                    path: "/categories",
                    items: [
                        {
                            title: "Cakes",
                            id: "1",
                            link: "/categories/edit/1",
                            caption: "Sweets"
                        },
                        {
                            title: "Cupcakes",
                            id: "2",
                            link: "/categories/edit/2"
                        }
                    ]
                },
                {
                    category: "Products",
                    path: "/products",
                    items: [
                        {
                            title: "Test Product 1",
                            id: "1",
                            link: "/products/edit/1",
                            caption:
                                "Lorem lorem loremloremloremloremloremloremlorem"
                        },
                        {
                            title: "Test Product 2",
                            id: "2",
                            link: "/products/edit/2"
                        }
                    ]
                },
                {
                    category: "Customers",
                    path: "/customers",
                    items: []
                },
                {
                    category: "Comments"
                }
            ],
            navigationlinks: [
                {
                    title: "Dashboard",
                    icon: "dashboard",
                    link: "/dashboard"
                },
                {
                    title: "Customers",
                    icon: "account_circle",
                    link: "/accounts"
                },
                {
                    title: "Announcements",
                    icon: "announcement",
                    link: "/announcements"
                },
                {
                    title: "Product Categories",
                    icon: "category",
                    link: "/categories"
                },
                {
                    title: "Products",
                    icon: "cake",
                    link: "/products"
                },
                {
                    title: "Comments",
                    icon: "comment",
                    link: "/comments"
                },
                {
                    title: "Orders",
                    icon: "fireplace",
                    link: "/orders"
                },
                {
                    title: "Business Holidays",
                    icon: "date_range",
                    link: "/holidays"
                }
            ]
        };
    },

    methods: {
        handleScroll(e) {
            if (this.eventTimer) {
                window.clearTimeout(this.eventTimer);
            }
            this.eventTimer = window.setTimeout(() => {
                this.scrolled = window.scrollY >= 50 ? true : false;
            }, 50);
        },
        drawerLayoutChange(state) {
            this.showNavBtn = !state;
        }
    }
};
</script>
