"use strict";
const aboutRouter = [
    {
        path: "/about",
        component: () =>
            import(
                /* webpackChunkName: "Backend-about-list" */ "../components/about/index"
            ),
        name: "about"
    },
    {
        path: "/about/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-about-add" */ "../components/about/add"
            ),
        name: "aboutAdd"
    },
    {
        path: "/about/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-about-edit" */ "../components/about/edit"
            ),
        name: "aboutEdit"
    }
];

export default aboutRouter;
