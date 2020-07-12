"use strict";
const homeRouter = [{
    path: '/',
    component: () =>
        import ('../components/home/Home'),
    name: 'home',
}];

export default homeRouter;