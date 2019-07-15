import Repository from './Repository';
const resource = 'projects';
export class Project {

}

export default {

  get() {
    return Repository.get(`${resource}`);
  },

  getProject(id) {
    return Repository.get(`${resource}/${id}`);
  },

  getTypes() {
    return Repository.get(`/types`);
  },

  getTopics(type) {
    if (type == "PD") {
      return Repository.get(`/topics?type=DEVELOPMENT_RESEARCH`);
    } else if (type == "EE") {
      return Repository.get(`/topics?type=ENERGY_EFFICIENCY`);
    }
    return Repository.get(`/topics`);
  },

  getTopicSubtopic(topic) {
    if (topic) {
      return Repository.get(`/subtopics?topic=${topic}`);
    }
    return Repository.get(`/subtopics`);
  },

  getInnovationPhases() {
    return Repository.get(`${resource}/innovation-phases`);
  },

  getProducts() {
    return Repository.get(`${resource}/products`);
  },

  getSegments() {
    return Repository.get(`${resource}/segments`);
  },

  getSharingTypes() {
    return Repository.get(`${resource}/sharing-types`);
  },

  getEnterprises(id) {
    return Repository.get(`${resource}/${id}/enterprises`);
  },

  getMembers(id) {
    return Repository.get(`${resource}/${id}/members`);
  },

  save(project) {
    return Repository.post(`${resource}`, project);
  }


};
