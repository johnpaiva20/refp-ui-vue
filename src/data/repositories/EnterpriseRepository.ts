import api from '../../common/api.service';
import { Enterprise } from '@/domain/entities/Enterprise';
const resource = 'enterprises';
export default class EnterpriseRepository {

  listEnterprises() {
    return api.get(`${resource}`);
  } 

  createEnterprise(enterprise: Enterprise) {
    return api.post(`${resource}`, enterprise);

  }
};
