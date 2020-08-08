"use strict";
const newsRouter = [
    {
        path: "/news",
        component: () =>
            import(
                /* webpackChunkName: "Backend-news-list" */ "../components/news/index"
            ),
        name: "news"
    },
    {
        path: "/news/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-news-add" */ "../components/news/add"
            ),
        name: "newsAdd"
    },
    {
        path: "/news/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-news-edit" */ "../components/news/edit"
            ),
        name: "newsEdit"
    }
];

export default newsRouter;
