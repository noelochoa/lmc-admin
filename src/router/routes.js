const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/Index.vue") },
            { path: "dashboard", component: () => import("pages/Index.vue") }
        ]
    },

    {
        path: "/accounts",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/accounts/Index.vue")
            },
            {
                path: "edit/:id",
                component: () => import("pages/accounts/Edit.vue")
            }
        ]
    },

    {
        path: "/announcements",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/announcements/Index.vue")
            },
            {
                path: "add",
                component: () => import("pages/announcements/Add.vue")
            },
            {
                path: "edit/:id",
                component: () => import("pages/announcements/Edit.vue")
            }
        ]
    },
    {
        path: "/categories",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/categories/Index.vue")
            },
            {
                path: "add",
                component: () => import("pages/categories/Add.vue")
            },
            {
                path: "edit/:id",
                component: () => import("pages/categories/Edit.vue")
            }
        ]
    },
    {
        path: "/products",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/products/Index.vue")
            },
            {
                path: "add",
                component: () => import("pages/products/Add.vue")
            },
            {
                path: "edit/:id",
                component: () => import("pages/products/Edit.vue")
            }
        ]
    },
    {
        path: "/discounts",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/discounts/Index.vue")
            },
            {
                path: "add",
                component: () => import("pages/discounts/Add.vue")
            },
            {
                path: "edit/:id",
                component: () => import("pages/discounts/Edit.vue")
            }
        ]
    },
    {
        path: "/comments",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/comments/Index.vue") },
            {
                path: "reply/:id",
                component: () => import("pages/comments/Reply.vue")
            }
        ]
    },
    {
        path: "/orders",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/orders/Index.vue") },
            {
                path: "process/:id",
                component: () => import("pages/orders/Process.vue")
            }
        ]
    },
    {
        path: "/holidays",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/holidays/Index.vue") },
            { path: "add", component: () => import("pages/holidays/Add.vue") },
            {
                path: "edit/:id",
                component: () => import("pages/holidays/Edit.vue")
            }
        ]
    },
    {
        path: "/users",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/users/Index.vue") },
            { path: "add", component: () => import("pages/users/Add.vue") },
            { path: "edit", component: () => import("pages/users/Edit.vue") },
            {
                path: "changepw",
                component: () => import("pages/users/ChangePW.vue")
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
