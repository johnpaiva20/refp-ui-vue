import api from '../workspace/api/api.config';
const resource = 'projects';
export class Project {

}

export default {

  listProjects() {
    return api.get(`${resource}`);
  },

  getProjectbyId(id) {
    return api.get(`${resource}/${id}`);
  },

  listProjectTypes() {
    return api.get(`/types`);
  },

  listProjectTopics(type) {
    if (type == "PD") {
      return api.get(`/topics?priority=YES&type=DEVELOPMENT_RESEARCH`);
    } else if (type == "EE") {
      return api.get(`/topics?priority=YES&type=ENERGY_EFFICIENCY`);
    }
    return api.get(`/topics`);
  },

  listProjectSubtopics(topic) {
    if (topic) {
      return api.get(`/subtopics?topic=${topic}`);
    }
    return api.get(`/subtopics`);
  },

  listProjectInnovationPhases() {
    return api.get(`${resource}/innovation-phases`);
  },

  listProjectProductTypes() {
    return api.get(`${resource}/products/types`);
  },

  listProjectSegments() {
    return api.get(`${resource}/segments`);
  },

  listProjectSharingTypes() {
    return api.get(`${resource}/sharing-types`);
  },

  listProjectEnterprises(id) {
    return api.get(`${resource}/${id}/enterprises`);
  },

  listProjectMembers(id) {
    return api.get(`${resource}/${id}/members`);
  },

  createProject(project) {
    return api.post(`${resource}`, project);
  }


};
