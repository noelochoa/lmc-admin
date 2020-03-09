const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/Index.vue") },
            { path: "dashboard", component: () => import("pages/Index.vue") },
            {
                path: "accounts",
                component: () => import("pages/accounts/Index.vue")
            },
            {
                path: "announcements",
                component: () => import("pages/announcements/Index.vue")
            },
            {
                path: "categories",
                component: () => import("pages/categories/Index.vue")
            },
            {
                path: "products",
                component: () => import("pages/products/Index.vue")
            },
            {
                path: "comments",
                component: () => import("pages/comments/Index.vue")
            },
            {
                path: "orders",
                component: () => import("pages/orders/Index.vue")
            },
            {
                path: "holidays",
                component: () => import("pages/holidays/Index.vue")
            },
            {
                path: "users",
                component: () => import("pages/users/Index.vue")
            }
        ]
    },

    {
        path: "/login",
        component: () => import("layouts/LoginLayout.vue"),
        children: [
            { path: "", component: () => import("pages/login/Index.vue") }
        ]
    }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
    routes.push({
        path: "*",
        component: () => import("pages/Error404.vue")
    });
}

export default routes;
