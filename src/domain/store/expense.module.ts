import { Pageable } from '@/data/helpers/pageable';
import ExpenseService from '@/data/services/expenseService';
import { Enterprise, Expense } from '../entities';
import { FETCH_EXPENSE, FETCH_EXPENSES, SAVE_EXPENSE } from './actions.type';
import { FETCH_EXPENSE_END, FETCH_EXPENSE_START, FETCH_PROJECTS_END, FETCH_PROJECTS_START, START_LOADING, STOP_LOADING } from './mutations.type';

interface EXPENSE_STATE {
    expenses: Enterprise[],
    isLoadingeExpenses: boolean,
    expensesCount: number,
    enterpriseSelected: Expense | null,
}

const state: EXPENSE_STATE = {
    expenses: [],
    isLoadingeExpenses: false,
    expensesCount: 0,
    enterpriseSelected: null,
};

const expenseService = new ExpenseService();

const getters = {
    expensesCount(state: { expensesCount: number; }) {
        return state.expensesCount;
    },
    expenses(state: { expenses: Expense[]; }) {
        return state.expenses;
    },
    isLoadingeExpenses(state: { isLoadingeExpenses: boolean; }) {
        return state.isLoadingeExpenses;
    },
};

const actions = {
    async [FETCH_EXPENSES](context: any, pageable?: Pageable) {
        context.commit(FETCH_PROJECTS_START, { isLoadingProjects: true });
        context.commit(START_LOADING);
        try {
            const response = await expenseService.listExpenses(pageable);
            context.commit(FETCH_PROJECTS_END, { projects: response.data, isLoadingeExpenses: false });
            context.commit(STOP_LOADING);
            return response;
        }
        catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [FETCH_EXPENSE](context: any, id: number) {
        context.commit(START_LOADING);
        try {
            const response = await expenseService.getExpensesById(id);
            context.commit(STOP_LOADING);
            return response;
        } catch (error) {
            context.commit(STOP_LOADING);
            throw new Error(error);
        }
    },
    async [SAVE_EXPENSE](context: any, expenses: Expense) {
        context.commit(START_LOADING);
        try {
            const response = await expenseService.createExpenses(expenses);
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
    [FETCH_EXPENSE_START](state: { isLoadingeExpenses: boolean; }) {
        state.isLoadingeExpenses = true;
    },
    [FETCH_EXPENSE_END](state: { expenses: any; expensesCount: any; isLoadingeExpenses: boolean; }, { expenses, expensesCount }: any) {
        state.expenses = expenses;
        state.expensesCount = expensesCount;
        state.isLoadingeExpenses = false;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
};