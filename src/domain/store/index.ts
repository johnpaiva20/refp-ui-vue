import Vue from 'vue';
import Vuex from 'vuex';
import application from './application.module';
import project from './project.module';
import auth from './auth.module';
import user from './user.module';
import enterprise from './enterprise.module';
import expense from './expense.module';
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
    auth,
    enterprise,
    expense
  }
});