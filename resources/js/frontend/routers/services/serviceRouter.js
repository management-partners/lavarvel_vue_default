"use strict";
const serviceRouter = [
    {
        path: '/service',
        component: () =>
            import(/* webpackChunkName: "Sevice" */ '../../components/services/Service'),
        name: 'Service',
    },
    {
        path: '/advisory',
        component: () =>
            import(/* webpackChunkName: "Sevice" */ '../../components/services/Advisory'),
        name: 'Advisory',
    },
    {
        path: '/marketing',
        component: () =>
            import(/* webpackChunkName: "Sevice" */ '../../components/services/Marketing'),
        name: 'Marketing',
    }, 
    {
        path: '/mobile',
        component: () =>
            import(/* webpackChunkName: "Sevice" */ '../../components/services/Mobile'),
        name: 'Mobile',
    }, 
    {
        path: '/software',
        component: () =>
            import(/* webpackChunkName: "Sevice" */ '../../components/services/Software'),
        name: 'Software',
    }, {
        path: '/website',
        component: () =>
            import(/* webpackChunkName: "Sevice" */ '../../components/services/Website'),
        name: 'website',
    }
];

export default serviceRouter;