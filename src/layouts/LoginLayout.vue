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
        titleTemplate: title => `${title} | Bake Free Admin Portal`,
        // meta tags
        meta: {
            description: {
                name: "description",
                content: "Content Management System for Bake Free"
            },
            keywords: {
                name: "keywords",
                content: "cms bake fre admin portal"
            },
            equiv: {
                "http-equiv": "Content-Type",
                content: "text/html; charset=UTF-8"
            }
        }
    }
};
</script>
