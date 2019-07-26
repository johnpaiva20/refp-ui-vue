import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        packageVersion: process.env.PACKAGE_JSON.version || 'Versão Indefinida'
    },
    getters: {
        appVersion: (state) => {
            return state.packageVersion
        }
    },
})
