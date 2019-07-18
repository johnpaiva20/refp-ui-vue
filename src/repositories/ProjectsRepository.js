import Repository from './Repository';
const resource = 'projects';
export class Project {

}

export default {

  listProjects() {
    return Repository.get(`${resource}`);
  },

  getProjectbyId(id) {
    return Repository.get(`${resource}/${id}`);
  },

  listProjectTypes() {
    return Repository.get(`/types`);
  },

  listProjectTopics(type) {
    if (type == "PD") {
      return Repository.get(`/topics?priority=YES&type=DEVELOPMENT_RESEARCH`);
    } else if (type == "EE") {
      return Repository.get(`/topics?priority=YES&type=ENERGY_EFFICIENCY`);
    }
    return Repository.get(`/topics`);
  },

  listProjectSubtopics(topic) {
    if (topic) {
      return Repository.get(`/subtopics?topic=${topic}`);
    }
    return Repository.get(`/subtopics`);
  },

  listProjectInnovationPhases() {
    return Repository.get(`${resource}/innovation-phases`);
  },

  listProjectProductTypes() {
    return Repository.get(`${resource}/products/types`);
  },

  listProjectSegments() {
    return Repository.get(`${resource}/segments`);
  },

  listProjectSharingTypes() {
    return Repository.get(`${resource}/sharing-types`);
  },

  listProjectEnterprises(id) {
    return Repository.get(`${resource}/${id}/enterprises`);
  },

  listProjectMembers(id) {
    return Repository.get(`${resource}/${id}/members`);
  },

  createProject(project) {
    return Repository.post(`${resource}`, project);
  }


};
