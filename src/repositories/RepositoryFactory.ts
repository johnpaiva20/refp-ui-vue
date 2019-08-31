import ProjectsRepository from './ProjectsRepository';
import AccountCategoryRepository from './AccountCategoryRepository';
import EnterpriseRepository from './EnterpriseRepository';
import MemberRepository from './MemberRepository';
import ApplicationRepository from './ApplicationRepository';

export const RepositoryFactory = {
  get: (name: string) => {
    switch (name) {
      case 'projects':
        return new ProjectsRepository();
      case 'accountCategories':
        return new AccountCategoryRepository
      case 'enterprises':
        return new EnterpriseRepository;
      case 'members':
        return new MemberRepository;
      case 'application':
        return new ApplicationRepository;
    }
  },
  getProjectRepository() {
    return new ProjectsRepository();
  },
  getMemberRepository() {
    return new MemberRepository;
  },
  getAccountCategoryRepository() {
    return new AccountCategoryRepository
  },
  getApplicationRepository() {
    return new ApplicationRepository;
  },
  getEnterpriseRepository() {
    return new EnterpriseRepository;
  }

};
