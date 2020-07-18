require('./bootstrap');

import App from './components/layouts/App';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers/routers';
import store from './stores/store';
import WOW from 'wow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery'
window.jQuery = jQuery
window.$ = jQuery
const wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});
window.events = new Vue();

const app = new Vue({
    el: '#app',
    template: '<App/>',
    render: h => h(App),
    router,
    store: store,
});