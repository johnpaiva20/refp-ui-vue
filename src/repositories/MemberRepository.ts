import api from '../workspace/api/api.config';
import { Member } from '@/workspace/models/Member';
const resource = 'members';
export default class MemberRepository {

  listMembers() {
    return api.get(`${resource}`);
  }
  createMember(member: Member) {
    return api.post(`${resource}`, member);

  }
};
