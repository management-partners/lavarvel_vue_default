"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_BACKEND } from '../api/api';

Vue.use(Vuex);

const backendStore = {
    namespaced: true,
    state: {
        backends: [],
    },
    mutations: {
        FETCH(state, backends) {
            state.backends = backends;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_BACKEND)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default backendStore;