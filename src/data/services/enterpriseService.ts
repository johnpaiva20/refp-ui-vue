import { Pageable } from '../helpers/pageable';
import { Enterprise } from '@/domain/entities';
import EnterpriseRepository from '../repositories/EnterpriseRepository';
import ProjectRespository from '../repositories/ProjectsRepository';

export default class EnterpriseService {
    enterpriseRespository: EnterpriseRepository = new EnterpriseRepository();

    projectRepository:ProjectRespository = new ProjectRespository();
    
    createEnterprise(enterprise: Enterprise) {
        return this.enterpriseRespository.createEnterprise(enterprise);
    }
    getEnterpriseById(id: number) {
        return this.enterpriseRespository.getEnterpriseById(id);
    }
    listEnterprises(pageable: Pageable | undefined) {
        return this.enterpriseRespository.listEnterprises();
    }
    updateEnterprise(id: number,enterprise: Enterprise){
        return this.enterpriseRespository.updateEnterprise(id,enterprise);
    }

    getEnterpriseByProjectId(id: number) {
        return this.projectRepository.listProjectEnterprises(id);
    }

}