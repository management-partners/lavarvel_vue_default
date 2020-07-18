"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_CONTACT_US } from '../../api/api';

Vue.use(Vuex);

const contactUsStore = {
    namespaced: true,
    state: {
        contact: [],
    },
    mutations: {
        FETCH(state, contact) {
            state.contact = contact;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_CONTACT_US)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default contactUsStore;