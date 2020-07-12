"use strict";

import backendStore from "./backendStore";
import Vuex from 'vuex';

const stores = new Vuex.Store({
    modules: {
        product: backendStore,
    }
});

export default stores;