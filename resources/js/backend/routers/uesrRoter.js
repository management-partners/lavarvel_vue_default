"use strict";
const userRouter = [
    {
        path: "/user",
        component: () =>
            import(
                /* webpackChunkName: "Backend-user-list" */ "../components/users/index"
            ),
        name: "user"
    },
    {
        path: "/user/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-user-add" */ "../components/users/add"
            ),
        name: "userAdd"
    },
    {
        path: "/user/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-user-edit" */ "../components/users/edit"
            ),
        name: "userEdit"
    },
    {
        path: "/user/forgot",
        component: () =>
            import(
                /* webpackChunkName: "Backend-user-forgot" */ "../components/users/password"
            ),
        name: "userForgot"
    },
    {
        path: "/user/profile",
        component: () =>
            import(
                /* webpackChunkName: "Backend-user-profile" */ "../components/users/profile"
            ),
        name: "userProfile"
    }
];

export default userRouter;
