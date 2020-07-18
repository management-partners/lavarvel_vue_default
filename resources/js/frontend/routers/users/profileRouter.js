"use strict";
const profileRouter = [
    {
        path: '/profile',
        component: () =>
            import(/* webpackChunkName: "Profile" */ '../../components/users/Profile'),
        name: 'Profile',
    },
    {
        path: '/login',
        component: () =>
            import(/* webpackChunkName: "Login" */ '../../components/users/Login'),
        name: 'Login',
    },
    {
        path: '/register',
        component: () =>
            import (/* webpackChunkName: "Register" */ '../../components/users/Register'),
        name: 'Register',
    },
    {
        path: '/update-password',
        component: () =>
            import (/* webpackChunkName: "UpdatePassword" */ '../../components/users/UpdatePassword'),
        name: 'UpdatePassword',
    }
];

export default profileRouter;