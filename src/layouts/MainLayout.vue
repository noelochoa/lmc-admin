<template>
  <q-layout view="hHh lpR fFf">
    <div class="blur-bg"></div>
    <q-header class="text-white navheader">
      <q-toolbar>
        <q-toolbar-title>
          Welcome,
          <b class="alias">{{name}}</b>
        </q-toolbar-title>
        <q-btn
          dense
          flat
          round
          icon="menu"
          side="right"
          class="nav-toggle-btn"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="250" :breakpoint="767" class="bg-gray-alpha" side="left">
      <q-list class="nav-list">
        <q-item-label header class="text-grey-5">Navigation</q-item-label>
        <Navigation v-for="link in navigationlinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.blur-bg {
  position: fixed;
  height: 100%;
  width: 100%;
  /* Center and scale the image nicely */
  background-image: url("../statics/bg-cms.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* Add the blur effect */
  filter: blur(10px);
  -webkit-filter: blur(10px);
  transform: scale(1.1);
}
.q-drawer-container,
.q-drawer,
.bg-gray-alpha,
.navheader,
.q-toolbar {
  background: rgba(128, 128, 128, 0.35) !important;
  color: rgb(221, 221, 221);
}
.q-toolbar-title > .alias {
  text-transform: capitalize;
}
.q-router-link--exact-active {
  border-right: 3px solid $primary;
}
.nav-toggle-btn {
  display: none;
}

@media (max-width: 767px) {
  .nav-list {
    padding-top: 50px;
  }
  .nav-toggle-btn {
    display: inline-flex;
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
  data() {
    return {
      drawer: true,
      navigationlinks: [
        {
          title: "Dashboard",
          icon: "dashboard",
          link: "dashboard"
        },
        {
          title: "Reseller Accounts",
          icon: "account_circle",
          link: "accounts"
        },
        {
          title: "Announcements",
          icon: "announcement",
          link: "announcements"
        },
        {
          title: "Product Categories",
          icon: "category",
          link: "categories"
        },
        {
          title: "Products",
          icon: "cake",
          link: "products"
        },
        {
          title: "Comments",
          icon: "comment",
          link: "comments"
        },
        {
          title: "Orders",
          icon: "fireplace",
          link: "orders"
        },
        {
          title: "Business Holidays",
          icon: "date_range",
          link: "holidays"
        }
      ]
    };
  },

  methods: {
    goHome: function() {}
  }
};
</script>
