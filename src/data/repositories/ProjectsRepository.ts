import { Project } from '@/domain/entities/Project';
import api from '../../common/api.service';
import { Pageable } from '../helpers/pageable';
const resource = 'projects';
export default class ProjectRespository {

  listProjects(pageable?: Pageable) {
    if (pageable) return api.get(`${resource}`, { params: { page: pageable.page, size: pageable.size } });
    else return api.get(`${resource}`);

  }

  getProjectPages(pageable?: Pageable) {
    if (pageable) return api.get(`${resource}/pages`, { params: { page: pageable.page, size: pageable.size } });
    else return api.get(`${resource}/pages`, { params: { page: 0, size: 20 } });
  }

  getProjectbyId(id: number) {
    return api.get(`${resource}/${id}`);
  }

  listProjectTypes() {
    return api.get(`/types`);
  }

  listProjectTopics(type: string) {
    if (type == 'PD') {
      return api.get(`/topics?priority=YES&type=DEVELOPMENT_RESEARCH`);
    } else if (type == 'EE') {
      return api.get(`/topics?priority=YES&type=ENERGY_EFFICIENCY`);
    }
    return api.get(`/topics`);
  }

  listProjectSubtopics(topic: number) {
    if (topic) {
      return api.get(`/subtopics?topic=${topic}`);
    }
    return api.get(`/subtopics`);
  }

  listProjectInnovationPhases() {
    return api.get(`${resource}/innovation-phases`);
  }

  listProjectProductTypes() {
    return api.get(`${resource}/products/types`);
  }

  listProjectSegments() {
    return api.get(`${resource}/segments`);
  }

  listProjectSharingTypes() {
    return api.get(`${resource}/sharing-types`);
  }

  listProjectEnterprises(id: number) {
    return api.get(`${resource}/${id}/enterprises`);
  }

  listProjectExpenses(id: number) {
    return api.get(`${resource}/${id}/expenses`);
  }

  listProjectMembers(id: number) {
    return api.get(`${resource}/${id}/members`);
  }

  createProject(project: Project) {
    return api.post(`${resource}`, project);
  }
};
