"use strict";

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_NEWS } from '../../api/api';

Vue.use(Vuex);

const newsStore = {
    namespaced: true,
    state: {
        news: [],
    },
    mutations: {
        FETCH(state, news) {
            state.news = news;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_NEWS)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
};

export default newsStore;