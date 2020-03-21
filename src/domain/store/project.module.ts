import { ProjectService } from '@/data/services';
import { FETCH_PROJECTS, FETCH_PROJECT, SAVE_PROJECT } from './actions.type';
import { FETCH_PROJECTS_START, FETCH_PROJECTS_END, START_LOADING, STOP_LOADING } from './mutations.type';
import { Project } from '../entities';
import { Pageable } from '@/data/helpers/pageable';

interface PROJECTS_STATE {
    projects: Project[],
    isLoadingProjects: boolean,
    projectsCount: number,
    projectSelected: Project | null,
}

const state: PROJECTS_STATE = {
    projects: [],
    isLoadingProjects: false,
    projectsCount: 0,
    projectSelected: null,
};

const projectService = new ProjectService();

const getters = {
    projectsCount(state: { projectsCount: number; }) {
        return state.projectsCount;
    },
    projects(state: { projects: Project[]; }) {
        return state.projects;
    },
    isLoadingProjects(state: { isLoadingProjects: boolean; }) {
        return state.isLoadingProjects;
    },
};

const actions = {
    async [FETCH_PROJECTS](context: any, pageable?: Pageable) {
        context.commit(FETCH_PROJECTS_START, { isLoadingProjects: true });
        context.commit(START_LOADING);
        try {
            const response = await projectService.listProjects(pageable);
            context.commit(FETCH_PROJECTS_END, { projects: response.data, isLoadingProjects: false });
            context.commit(STOP_LOADING);
            return response;
        }
        catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [FETCH_PROJECT](context: any, id: number) {
        context.commit(START_LOADING);
        try {
            const response = await projectService.getProjectbyId(id);
            context.commit(STOP_LOADING);
            return response;
        } catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [SAVE_PROJECT](context: any, project: Project) {
        context.commit(START_LOADING);
        try {
            const response = await projectService.createProject(project);
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
    [FETCH_PROJECTS_START](state: { isLoadingProjects: boolean; }) {
        state.isLoadingProjects = true;
    },
    [FETCH_PROJECTS_END](state: { projects: any; projectsCount: any; isLoadingProjects: boolean; }, { projects, projectsCount }: any) {
        state.projects = projects;
        state.projectsCount = projectsCount;
        state.isLoadingProjects = false;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
};