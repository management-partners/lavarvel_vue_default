"use strict";
const aboutUsRouter = [{
    path: '/about-us',
    component: () =>
        import (/* webpackChunkName: "AboutUs" */ '../../components/aboutUs/AboutUs'),
    name: 'AboutUs',
}];

export default aboutUsRouter;