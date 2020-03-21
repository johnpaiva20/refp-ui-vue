import { START_LOADING, STOP_LOADING, SET_PROJECT, SET_PERSONAL,OPEN_ACTIONS_SIDEBAR,CLOSE_ACTIONS_SIDEBAR } from './mutations.type';

interface APPLICATION_STATE {
    isLoading: boolean,
    isProject: boolean,
    packageVersion: String,
    isActionSidebarOpened: boolean
}

const state: APPLICATION_STATE = {
    isLoading: false,
    isProject: false,
    packageVersion: process.env.VUE_APP_VERSION || '0',
    isActionSidebarOpened: false
};

const getters = {
    isLoading() {
        return state.isLoading;
    },
    isProject() {
        return state.isProject;
    },
    version() {
        return state.packageVersion;
    },
    isActionSidebarOpened() {
        return state.isActionSidebarOpened;
    }
};

const actions = {

};

const mutations = {
    [START_LOADING]() {
        state.isLoading = true;
    },
    [STOP_LOADING]() {
        state.isLoading = false;
    },
    [SET_PROJECT]() {
        state.isProject = true;
    },
    [SET_PERSONAL]() {
        state.isProject = false;
    },
    [OPEN_ACTIONS_SIDEBAR](){
        state.isActionSidebarOpened = true;
    },
    [CLOSE_ACTIONS_SIDEBAR](){
        state.isActionSidebarOpened = false;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};