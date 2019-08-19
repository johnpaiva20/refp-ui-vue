import api from '../workspace/api/api.config';
import { Enterprise } from '@/workspace/models/Enterprise';
const resource = 'enterprises';
export default class EnterpriseRepository {

  listEnterprises() {
    return api.get(`${resource}`);
  } 

  createEnterprise(enterprise: Enterprise) {
    return api.post(`${resource}`, enterprise);

  }
};
