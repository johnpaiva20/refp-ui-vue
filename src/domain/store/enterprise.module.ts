import { Pageable } from '@/data/helpers/pageable';
import EnterpriseService from '@/data/services/enterpriseService';
import { Enterprise } from '../entities';
import { FETCH_ENTERPRISE, FETCH_ENTERPRISES, SAVE_ENTERPRISE, FETCH_PROJECT_ENTERPRISES, UPDATE_ENTERPRISE } from './actions.type';
import { FETCH_ENTERPRISES_END, FETCH_ENTERPRISES_START, START_LOADING, STOP_LOADING } from './mutations.type';

interface ENTERPRISE_STATE {
    enterprises: Enterprise[],
    isLoadingEnterprises: boolean,
    enterprisesCount: number,
    enterpriseSelected: Enterprise | null,
    projectEnterprises: Enterprise[]
}

const state: ENTERPRISE_STATE = {
    enterprises: [],
    isLoadingEnterprises: false,
    enterprisesCount: 0,
    enterpriseSelected: null,
    projectEnterprises:[]
};

const enterpriseService = new EnterpriseService();

const getters = {
    enterprisesCount(state: { enterprisesCount: number; }) {
        return state.enterprisesCount;
    },
    enterprises(state: { enterprises: Enterprise[]; }) {
        return state.enterprises;
    },
    isLoadingEnterprises(state: { isLoadingEnterprises: boolean; }) {
        return state.isLoadingEnterprises;
    },
    projectEnterprises(state: { projectEnterprises: Enterprise[]; }) {
        return state.projectEnterprises;
    },
};

const actions = {
    async [FETCH_ENTERPRISES](context: any, pageable?: Pageable) {
        context.commit(FETCH_ENTERPRISES_START, { isLoadingProjects: true });
        context.commit(START_LOADING);
        try {
            const response = await enterpriseService.listEnterprises(pageable);
            context.commit(FETCH_ENTERPRISES_END, { projects: response.data, isLoadingEnterprises: false });
            context.commit(STOP_LOADING);
            return response;
        }
        catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [FETCH_ENTERPRISE](context: any, id: number) {
        context.commit(START_LOADING);
        try {
            const response = await enterpriseService.getEnterpriseById(id);
            context.commit(STOP_LOADING);
            return response;
        } catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [FETCH_PROJECT_ENTERPRISES](context: any, id: number) {
        context.commit(START_LOADING);
        try {
            const response = await enterpriseService.getEnterpriseByProjectId(id);
            context.commit(STOP_LOADING);
            return response;
        } catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [SAVE_ENTERPRISE](context: any, enterprise: Enterprise) {
        context.commit(START_LOADING);
        try {
            const response = await enterpriseService.createEnterprise(enterprise);
            context.commit(STOP_LOADING);
            return response;
        } catch (error) {
            context.commit(STOP_LOADING);
            console.log(JSON.stringify(error))
            throw new Error(error);
        }
    },async [UPDATE_ENTERPRISE](context: any, enterprise: Enterprise) {
        context.commit(START_LOADING);
        try {
            const response = await enterpriseService.updateEnterprise(enterprise.id,enterprise);
            context.commit(STOP_LOADING);
            return response;
        } catch (error) {
            context.commit(STOP_LOADING);
            console.log(JSON.stringify(error))
            throw new Error(error);
        }
    }
};

const mutations = {
    [FETCH_ENTERPRISES_START](state: { isLoadingEnterprises: boolean; }) {
        state.isLoadingEnterprises = true;
    },
    [FETCH_ENTERPRISES_END](state: { enterprises: any; enterprisesCount: any; isLoadingEnterprises: boolean; }, { enterprises, enterprisesCount }: any) {
        state.enterprises = enterprises;
        state.enterprisesCount = enterprisesCount;
        state.isLoadingEnterprises = false;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
};