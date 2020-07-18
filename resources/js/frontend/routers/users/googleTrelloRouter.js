"use strict";
const updateGGRouter = [
    {
        path: '/update-google',
        component: () =>
            import(/* webpackChunkName: "UpdateGoogle" */ '../../components/users/UpdateGoogle'),
        name: 'UpdateGoogle',
    }, {
        path: '/update-trello',
        component: () =>
            import(/* webpackChunkName: "UpdateTrello" */ '../../components/users/UpdateTrello'),
        name: 'UpdateTrello',
    }
];

export default updateGGRouter;