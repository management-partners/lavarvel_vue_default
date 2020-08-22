"use strict";
const categoryRouter = [
    {
        path: "/admin/category",
        component: () =>
            import(
                /* webpackChunkName: "Backend-category-list" */ "../components/categories/index"
            ),
        name: "category"
    },
    {
        path: "/admin/category/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-category-add" */ "../components/categories/add"
            ),
        name: "categoryAdd"
    },
    {
        path: "/admin/category/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-category-edit" */ "../components/categories/edit"
            ),
        name: "categoryEdit"
    }
];

export default categoryRouter;
