import ProjectsRepository from './ProjectsRepository';
import AccountCategoryRepository from './AccountCategoryRepository';
const repositories = {
  projects: ProjectsRepository,
  accountCategories: AccountCategoryRepository
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
