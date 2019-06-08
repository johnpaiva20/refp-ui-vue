import ProjectsRepository from './ProjectsRepository';
import AccountCategoryRepository from './AccountCategoryRepository';
import EnterpriseRepository from './EnterpriseRepository';

const repositories = {
  projects: ProjectsRepository,
  accountCategories: AccountCategoryRepository,
  enterprises:EnterpriseRepository
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
