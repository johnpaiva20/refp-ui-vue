import { Pageable } from '../helpers/pageable';
import { Enterprise } from '@/domain/entities';
import EnterpriseRepository from '../repositories/EnterpriseRepository';

export default class EnterpriseService {
    enterpriseRespository: EnterpriseRepository = new EnterpriseRepository();
    createEnterprise(enterprise: Enterprise) {
        return this.enterpriseRespository.createEnterprise(enterprise);
    }
    getEnterpriseById(id: number) {
        return this.enterpriseRespository.getEnterpriseById(id);
    }
    listEnterprises(pageable: Pageable | undefined) {
        return this.enterpriseRespository.listEnterprises();
    }
}