<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LoginLayout",
  meta: {
    title: "Sign In",
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
  }
};
</script>
