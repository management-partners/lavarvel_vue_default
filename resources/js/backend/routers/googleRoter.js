"use strict";
const googleRouter = [
    {
        path: "/google",
        component: () =>
            import(
                /* webpackChunkName: "Backend-google-list" */ "../components/services/google"
            ),
        name: "google"
    }
];

export default googleRouter;
