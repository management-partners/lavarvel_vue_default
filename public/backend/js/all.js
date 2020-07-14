require('./bootstrap');
import App from './components/layouts/App';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers/routers';
import store from './stores/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.Vue = require('vue');
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});
window.events = new Vue();

const app = new Vue({
    el: '#admin',
    template: '<App/>',
    render: h => h(App),
    router,
    store: store,
});