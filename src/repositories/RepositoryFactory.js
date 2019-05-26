import ProjectsRepository from './ProjectsRepository';
const repositories = {
  projects: ProjectsRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
