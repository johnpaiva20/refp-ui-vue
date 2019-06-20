import Repository from './Repository';
const resource = 'enterprises';
export default {

  get() {
    return Repository.get(`${resource}`);
  },
  save(enterprise){
    return Repository.post(`${resource}`,enterprise);

  }
};
