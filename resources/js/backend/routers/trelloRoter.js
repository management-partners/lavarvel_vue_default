"use strict";
const trelloRouter = [
    {
        path: "/trello",
        component: () =>
            import(
                /* webpackChunkName: "Backend-trello-list" */ "../components/services/trello"
            ),
        name: "trello"
    }
];

export default trelloRouter;
