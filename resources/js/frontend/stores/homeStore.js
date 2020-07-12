"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_HOME } from '../api/api';

Vue.use(Vuex);

const homeStore = {
    namespaced: true,
    state: {
        homes: [],
    },
    mutations: {
        FETCH(state, homes) {
            state.homes = homes;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_HOME)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default homeStore;