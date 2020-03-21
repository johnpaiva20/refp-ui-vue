import { User } from '../entities/User';

interface USER_STATE {
    user: User | null,
    isLoggedIn: boolean,
}

const state: USER_STATE = {
    user: null,
    isLoggedIn: false,
};

const getters = {
    isLoggedIn() {
        return state.isLoggedIn;
    },
    getUser() {
        return state.user;
    },
};

const actions = {

};

const mutations = {

};


export default {
    state,
    getters,
    actions,
    mutations
};