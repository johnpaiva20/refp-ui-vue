import Repository from './Repository';
const resource = 'members';
export default {

  get() {
    return Repository.get(`${resource}`);
  },
  save(member){
    return Repository.post(`${resource}`,member);

  }
};
