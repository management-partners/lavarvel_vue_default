"use strict";

import homeStore from "./homeStore";
import Vuex from 'vuex';

const stores = new Vuex.Store({
    modules: {
        product: homeStore,
    }
});

export default stores;