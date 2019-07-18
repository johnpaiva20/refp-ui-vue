import Repository from './Repository';
const resource = 'members';
export default {

  listMembers() {
    return Repository.get(`${resource}`);
  },
  createMember(member){
    return Repository.post(`${resource}`,member);

  }
};
