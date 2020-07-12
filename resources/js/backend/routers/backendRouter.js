"use strict";
const backendRouter = [{
    path: '/admin',
    component: () =>
        import ('../components/home/Dashboard'),
    name: 'backend',
}];

export default backendRouter;