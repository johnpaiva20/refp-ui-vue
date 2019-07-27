import ProjectsRepository from './ProjectsRepository';
import AccountCategoryRepository from './AccountCategoryRepository';
import EnterpriseRepository from './EnterpriseRepository';
import MemberRepository from './MemberRepository';
import ApplicationRepository from './ApplicationRepository';

const repositories = {
  projects: ProjectsRepository,
  accountCategories: AccountCategoryRepository,
  enterprises: EnterpriseRepository,
  members: MemberRepository,
  application:ApplicationRepository
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
