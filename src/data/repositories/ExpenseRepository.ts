import { Expense } from '@/domain/entities';
import api from '../../common/api.service';
const resource = 'expenses';
export default class ExpensesRepository {

    listExpenses() {
        return api.get(`${resource}`);
    }

    createExpenses(expense: Expense) {
        return api.post(`${resource}`,
            expense);
    }

    getExpensesById(id: number) {
        return api.get(`${resource}/${id}`);
    }

    updateExpenses(id: number, expense: Expense) {
        return api.put(`${resource}/${id}`, expense);
    }

    deleteExpenses(id: number) {
        return api.delete(`${resource}/${id}`);
    }

};
