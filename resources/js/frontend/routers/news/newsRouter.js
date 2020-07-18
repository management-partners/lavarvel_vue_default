"use strict";
const newsRouter = [{
    path: '/about-us',
    component: () =>
        import (/* webpackChunkName: "News" */ '../../components/news/News'),
    name: 'News',
}];

export default newsRouter;