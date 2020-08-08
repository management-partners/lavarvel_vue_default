"use strict";
const contactRouter = [
    {
        path: "/contact",
        component: () =>
            import(
                /* webpackChunkName: "Backend-contact-list" */ "../components/contacts/index"
            ),
        name: "contact"
    },
    {
        path: "/contact/add",
        component: () =>
            import(
                /* webpackChunkName: "Backend-contact-add" */ "../components/contacts/add"
            ),
        name: "contactAdd"
    },
    {
        path: "/contact/edit/:id",
        component: () =>
            import(
                /* webpackChunkName: "Backend-contact-edit" */ "../components/contacts/edit"
            ),
        name: "contactEdit"
    }
];

export default contactRouter;
