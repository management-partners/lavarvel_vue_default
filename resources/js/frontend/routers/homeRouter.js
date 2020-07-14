"use strict";
const homeRouter = [{
    path: '/',
    component: () =>
        import (/* webpackChunkName: "Home" */ '../components/home/Home'),
    name: 'home',
}];

export default homeRouter;