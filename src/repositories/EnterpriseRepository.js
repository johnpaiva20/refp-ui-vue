import Repository from './Repository';
const resource = 'enterprises';
export default {

  listEnterprises() {
    return Repository.get(`${resource}`);
  },
  createEnterprise(enterprise){
    return Repository.post(`${resource}`,enterprise);

  }
};
