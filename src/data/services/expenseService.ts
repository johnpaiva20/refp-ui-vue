import { Pageable } from '../helpers/pageable';
import ExpensesRepository from '../repositories/ExpenseRepository';
import { Expense } from '@/domain/entities';

export default class ExpenseService {
    createExpenses(expense: Expense) {
        return this.expenseRespository.createExpenses(expense);
    }

    expenseRespository: ExpensesRepository = new ExpensesRepository();

    listExpenses(pageable: Pageable | undefined) {
        return this.expenseRespository.listExpenses();
    }
    getExpensesById(id: number) {
        return this.expenseRespository.getExpensesById(id);
    }
}