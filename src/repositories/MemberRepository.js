import api from '../workspace/api/api.config';
const resource = 'members';
export default {

  listMembers() {
    return api.get(`${resource}`);
  },
  createMember(member){
    return api.post(`${resource}`,member);

  }
};
