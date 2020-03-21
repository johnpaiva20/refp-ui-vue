import api from '../../common/api.service';
import { Member } from '@/domain/entities/Member';
const resource = 'members';
export default class MemberRepository {

  listMembers() {
    return api.get(`${resource}`);
  }
  createMember(member: Member) {
    return api.post(`${resource}`, member);

  }
};
