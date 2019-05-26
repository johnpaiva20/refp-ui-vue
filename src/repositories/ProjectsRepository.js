import Repository from './Repository';
const resource = 'projects';
export default {

  get() {
    return Repository.get(`${resource}`);
  },

  getProject(id) {
    return Repository.get(`${resource}/${id}`);
  },

  getTypes() {
    return Repository.get(`${resource}/types`);
  },

  getTopics(type) {
    return Repository.get(`${resource}/topics-${type}`);
  },

  getTopicSubtopic(topic) {
    return Repository.get(`${resource}/subtopics-${topic}`);
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


};
