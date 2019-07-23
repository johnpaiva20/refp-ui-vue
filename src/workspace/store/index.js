import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import p from "../../../vue.config"
export default new Vuex.Store({
    state: {
        packageVersion: p,
        // the rest of your state here},
        getters: {
            appVersion: (state) => {
                return state.packageVersion
            }
            // the rest of your getters here  
        },
    }
})