<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white navheader">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          Welcome,
          <b class="alias">{{name}}</b>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left">
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.navheader,
.q-toolbar {
  background: rgb(255, 206, 206);
  background: #ffe0e040;
  color: $tertiary;
}
.q-toolbar-title > .alias {
  text-transform: capitalize;
}
.menu-list.q-item {
  border-radius: 0 32px 32px 0;
}
</style>

<script>
import EssentialLink from "../components/EssentialLink";

export default {
  preFetch({ store, redirect }) {
    if (!store.state.auth.authenticated) {
      redirect("/login");
    }
  },

  name: "MainLayout",
  components: { EssentialLink },
  computed: {
    name() {
      return this.$store.state.auth.name;
    }
  },
  data() {
    return {
      drawer: false,
      essentialLinks: [
        {
          title: "Docs",
          caption: "quasar.dev",
          icon: "school",
          link: "https://quasar.dev"
        },
        {
          title: "Github",
          caption: "github.com/quasarframework",
          icon: "code",
          link: "https://github.com/quasarframework"
        },
        {
          title: "Discord Chat Channel",
          caption: "chat.quasar.dev",
          icon: "chat",
          link: "https://chat.quasar.dev"
        },
        {
          title: "Forum",
          caption: "forum.quasar.dev",
          icon: "record_voice_over",
          link: "https://forum.quasar.dev"
        },
        {
          title: "Twitter",
          caption: "@quasarframework",
          icon: "rss_feed",
          link: "https://twitter.quasar.dev"
        },
        {
          title: "Facebook",
          caption: "@QuasarFramework",
          icon: "public",
          link: "https://facebook.quasar.dev"
        }
      ]
    };
  },

  methods: {
    goHome: function() {}
  }
};
</script>
