"use strict";
const backendRouter = [{
    path: '/admin',
    component: () =>
        import (/* webpackChunkName: "Home" */ '../components/home/Dashboard'),
    name: 'backend',
}];

export default backendRouter;