import ProjectsRepository from './ProjectsRepository';
import AccountCategoryRepository from './AccountCategoryRepository';
import EnterpriseRepository from './EnterpriseRepository';
import MemberRepository from './MemberRepository';
const repositories = {
  projects: ProjectsRepository,
  accountCategories: AccountCategoryRepository,
  enterprises: EnterpriseRepository,
  members: MemberRepository
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
