"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_ABOUT_US } from '../../api/api';

Vue.use(Vuex);

const aboutUsStore = {
    namespaced: true,
    state: {
        about: [],
    },
    mutations: {
        FETCH(state, about) {
            state.about = about;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_ABOUT_US)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default aboutUsStore;