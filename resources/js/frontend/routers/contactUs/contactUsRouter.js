"use strict";
const contactUsRouter = [{
    path: '/contact-us',
    component: () =>
        import (/* webpackChunkName: "ContactUs" */ '../../components/contactUs/ContactUs'),
    name: 'ContactUs',
}];

export default contactUsRouter;