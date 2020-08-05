"use strict";
const backendRouter = [{
    path: '/admin',
    component: () =>
        import (/* webpackChunkName: "Backend-home" */ '../components/home/Dashboard'),
    name: 'backend',
}];

export default backendRouter;