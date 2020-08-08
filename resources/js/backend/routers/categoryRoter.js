"use strict";
const categoryRouter = [
    {
        path: "/category",
        component: () =>
            import(
                /* webpackChunkName: "Backend-category-list" */ "../components/categories/index"
            ),
        name: "category"
    },
    {
        path: "/category/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-category-add" */ "../components/categories/add"
            ),
        name: "categoryAdd"
    },
    {
        path: "/category/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-category-edit" */ "../components/categories/edit"
            ),
        name: "categoryEdit"
    }
];

export default categoryRouter;
