<template>
    <q-layout view="hHh lpR fFf" ref="page">
        <div class="blur-bg"></div>
        <q-header class="text-white navheader" :class="{ scrolled: scrolled }">
            <q-toolbar>
                <q-btn dense flat round icon="person_add" class="q-mr-sm">
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add account</q-tooltip
                    >
                </q-btn>
                <q-input
                    v-model="searchText"
                    placeholder="Search products"
                    dense
                    class="quick-search"
                >
                    <template v-slot:append>
                        <q-icon
                            color="white"
                            name="close"
                            @click="searchText = ''"
                            class="cursor-pointer"
                        />
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
                    <q-menu square :offset="[10, 11]">
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
                            <q-separator vertical inset class="q-mx-lg" />
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
.sm-layout .q-drawer {
    background: rgb(26, 29, 26) !important;
}

.q-toolbar__title {
    font-size: 16px;
}
.q-placeholder {
    color: white;
}
.q-drawer {
    position: fixed;
}
.scrolled {
    background: rgb(26, 29, 26) !important;
}
.q-menu {
    color: white;
    background: #736656;
}
.quick-search {
    font-size: 12px;
}
.adjust-content-left {
    justify-content: left;
}
.alias {
    text-transform: capitalize;
}
.q-drawer .q-router-link--exact-active {
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

export default {
    preFetch({ store, redirect }) {
        if (!store.state.auth.authenticated) {
            redirect("/login");
        }
    },

    name: "MainLayout",
    components: { Navigation },
    computed: {
        name() {
            return this.$store.state.auth.name;
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
            eventTimer: null,
            scrolled: false,
            drawer: false,
            showNavBtn: false,
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
