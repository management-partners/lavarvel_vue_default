"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_GOOGLE } from '../../api/api';

Vue.use(Vuex);

const googleTrelloStore = {
    namespaced: true,
    state: {
        gg: [],
    },
    mutations: {
        FETCH(state, gg) {
            state.gg = gg;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_GOOGLE)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default googleTrelloStore;