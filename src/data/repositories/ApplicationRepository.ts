import api from '../../common/api.service';
import { User } from '@/domain/entities/User';

export default class ApplicationRepository {

  authentication(user: User) {
    return api.post(`authentication`, user);

  }
};
