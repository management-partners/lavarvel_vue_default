"use strict";
const locationRouter = [
    {
        path: "/location",
        component: () =>
            import(
                /* webpackChunkName: "Backend-location-list" */ "../components/location/index"
            ),
        name: "location"
    },
    {
        path: "/location/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-location-add" */ "../components/location/add"
            ),
        name: "locationAdd"
    },
    {
        path: "/location/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-location-edit" */ "../components/location/edit"
            ),
        name: "locationEdit"
    }
];

export default locationRouter;
