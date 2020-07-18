"use strict";

import homeRouter from './homeRouter';
import aboutUsRouter from './aboutUs/aboutUsRouter';
import contactUsRouter from './contactUs/contactUsRouter';
import newsRouter from './news/newsRouter';
import serviceRouter from './services/serviceRouter';
import profileRouter from './users/profileRouter';
import googleTrelloRouter from './users/googleTrelloRouter';

const routes = [
    ...homeRouter,
    ...aboutUsRouter,
    ...contactUsRouter,
    ...newsRouter,
    ...serviceRouter,
    ...profileRouter,
    ...googleTrelloRouter,
];

export default routes;