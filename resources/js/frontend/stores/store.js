"use strict";

import homeStore from "./homeStore";
import Vuex from 'vuex';
import aboutUsStore from "./aboutUs/aboutUsStore";
import newsStore from "./news/newsStore";
import serviceStore from "./services/serviceStore";
import profileStore from "./users/profileStore";
import googleTrelloStore from "./users/googleTrelloStore";

const stores = new Vuex.Store({
    modules: {
        product: homeStore,
        aboutUs: aboutUsStore,
        news: newsStore,
        service: serviceStore,
        profile: profileStore,
        googleTrello: googleTrelloStore
    }
});

export default stores;