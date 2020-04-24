import Vue from 'vue';
import Vuex from 'vuex';
import { User } from '../entities/User';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_JSON.version || 'Versão Indefinida',
    status: '',
    token: localStorage.getItem('token') || '',
    user: User,
    actualModel: '',
  },
  getters: {
    appVersion: (state) => state.packageVersion,
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {

    auth_request(state) {
      state.status = 'loading';
    },
    // auth_success(state:any,token:string,user:User) {
    //   state.status = 'success';
    //   state.token = token;
    //   state.user = user;
    // },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  /* actions: {
     login({ commit }, user) {
       return new Promise((resolve, reject) => {
         commit('auth_request');
         ApplicationRepository.authentication(user)
           .then((resp) => {
             const token = resp.data.token;
             const user = resp.data.user;
             localStorage.setItem('token', token);
             commit('auth_success', token, user);
             return resolve(resp);
           })
           .catch((error) => {
             commit('auth_error');
             localStorage.removeItem('token');
             return reject(error);
           });
       });
     },
     logout({ commit }) {
       return new Promise((resolve, reject) => {
         commit('logout');
         localStorage.removeItem('token');
         resolve();
         reject.toString();
       });
     },
   },*/
});
