import Vue from 'vue';
import Vuex from 'vuex';
import { User } from '../models/User';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_JSON.version || 'Versão Indefinida',
    status: '',
    token: localStorage.getItem('token') || '',
    user: User,
  },
  getters: {
    appVersion: (state) => state.packageVersion,
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  // mutations: {
  //   auth_request(state) {
  //     state.status = 'loading';
  //   },
  //   auth_success(
  //     state: { status: string; token: any; user: any },
  //     token: any,
  //     user: any,
  //   ) {
  //     state.status = 'success';
  //     state.token = token;
  //     state.user = user;
  //   },
  //   auth_error(state) {
  //     state.status = 'error';
  //   },
  //   logout(state) {
  //     state.status = '';
  //     state.token = '';
  //   },
  // },
  actions: {
    // login({ commit }, user) {
    //   return new Promise((resolve, reject) => {
    //     commit('auth_request');
    //     ApplicationRepository.authentication(user)
    //       .then((resp: object) => {
    //         const token = resp.data.token;
    //         const user = resp.data.user;
    //         localStorage.setItem('token', token);
    //         commit('auth_success', token, user);
    //         resolve(resp);
    //       })
    //       .catch((error: any) => {
    //         commit('auth_error');
    //         localStorage.removeItem('token');
    //         reject(error);
    //       });
    //   });
    // },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout');
        localStorage.removeItem('token');
        resolve();
        reject.toString();
      });
    },
  },
});
