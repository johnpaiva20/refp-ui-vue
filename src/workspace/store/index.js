import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const ApplicationRepository = RepositoryFactory.get("application");

//import api from '../api/api.config'
export default new Vuex.Store({
    state: {
        packageVersion: process.env.PACKAGE_JSON.version || 'Versão Indefinida',
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    getters: {
        appVersion: state => state.packageVersion,
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                ApplicationRepository.authentication(user)
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                resolve()
                reject.toString()
            })
        }
    }
})
