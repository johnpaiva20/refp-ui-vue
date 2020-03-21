import ProjectRespository from '../repositories/ProjectsRepository';
import { Project } from '@/domain/entities';
import { Pageable } from '../helpers/pageable';

export default class ProjectService {
    projectRespository: ProjectRespository = new ProjectRespository();

    listProjects(pageable?: Pageable) {
        return this.projectRespository.listProjects(pageable);
    }

    getProjectbyId(id: number) {
        return this.projectRespository.getProjectbyId(id);
    }
    
    createProject(project: Project) {
        return this.projectRespository.createProject(project)
    }

    getProjectPages(pageable?: Pageable) {
        return this.projectRespository.getProjectPages(pageable)
    }
}