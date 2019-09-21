import { Project } from '@/workspace/models/Project';
import api from '../workspace/api/api.config';
const resource = 'projects';
export default class ProjectRespository {

  listProjects() {
    return api.get(`${resource}`);
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

  listProjectMembers(id: number) {
    return api.get(`${resource}/${id}/members`);
  }

  createProject(project: Project) {
    return api.post(`${resource}`, project);
  }


};
