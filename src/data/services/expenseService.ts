import { Pageable } from '../helpers/pageable';
import ExpensesRepository from '../repositories/ExpenseRepository';
import { Expense } from '@/domain/entities';
import ProjectRespository from '../repositories/ProjectsRepository';

export default class ExpenseService {
    
    expenseRespository: ExpensesRepository = new ExpensesRepository();

    projectRepository: ProjectRespository = new ProjectRespository();
    
    createExpenses(expense: Expense) {
        return this.expenseRespository.createExpenses(expense);
    }

    listExpenses(pageable: Pageable | undefined) {
        return this.expenseRespository.listExpenses();
    }
    getExpensesById(id: number) {
        return this.expenseRespository.getExpensesById(id);
    }
    getExpensesByProjectId(id: number) {
        return this.projectRepository.listProjectExpenses(id);
    }
}