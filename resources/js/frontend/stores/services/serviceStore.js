"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_SERVICE } from '../../api/api';

Vue.use(Vuex);

const serviceStore = {
    namespaced: true,
    state: {
        service: [],
    },
    mutations: {
        FETCH(state, service) {
            state.service = service;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_MOBILE)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default serviceStore;