"use strict";

import backendRouter from './backendRouter';
import aboutRouter from './aboutRoter';
import categoryRouter from './categoryRoter';
import contactRouter from './contactRoter';
import locationRouter from './locationRoter';
import newsRouter from './newsRoter';
import googleRouter from './googleRoter';
import trelleRouter from './trelloRoter';
import usersRouter from './uesrRoter';

const routes = [
    ...backendRouter,
    ...aboutRouter,
    ...categoryRouter,
    ...contactRouter,
    ...locationRouter,
    ...newsRouter,
    ...googleRouter,
    ...trelleRouter,
    ...usersRouter
];

export default routes;