import api from '../workspace/api/api.config';
const resource = 'enterprises';
export default {

  listEnterprises() {
    return api.get(`${resource}`);
  },
  createEnterprise(enterprise){
    return api.post(`${resource}`,enterprise);

  }
};
