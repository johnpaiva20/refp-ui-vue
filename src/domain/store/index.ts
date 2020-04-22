import Vue from 'vue';
import Vuex from 'vuex';
import application from './application.module';
import project from './project.module';
import auth from './auth.module';
import user from './user.module';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    application,
    project,
    user,
    auth
  }
});