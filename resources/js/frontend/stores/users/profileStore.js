"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_PROFILE } from '../../api/api';

Vue.use(Vuex);

const profileStore = {
    namespaced: true,
    state: {
        profile: [],
    },
    mutations: {
        FETCH(state, profile) {
            state.profile = profile;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_PROFILE)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default profileStore;