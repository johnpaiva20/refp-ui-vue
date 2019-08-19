import api from '../workspace/api/api.config';
import { User } from '@/workspace/models/User';

export default class ApplicationRepository {

  authentication(user: User) {
    return api.post(`authentication`, user);

  }
};
