import { AccountCategory } from './AccountCategory';
import { Enterprise } from './Enterprise';
import { ProjectType } from './ProjectType';
import { ProjectEnterprise } from './ProjectEnterprise';
import { ServiceOrder } from './ServiceOrder';
import { Product } from './Product';
import { Topic } from './Topic';
import { Subtopic } from './Subtopic';
import { ProjectStatusEnum } from '../enums/ProjectStatusEnum';

export class Project {
    id!: number;
    title!: string;
    aneelId!: string;
    duration!: number;
    status!: ProjectStatusEnum;
    segment!: string;
    innovationPhase!: string
    sharingMethod!: string
    mainEnterprise!: Enterprise;
    type: ProjectType = new ProjectType();
    enterprises: ProjectEnterprise[];
    accountCategories: AccountCategory[];
    serviceOrder: ServiceOrder = new ServiceOrder();
    product: Product = new Product();
    topic: Topic = new Topic();
    subtopic: Subtopic = new Subtopic();

    constructor(type?: ProjectType, status?: ProjectStatusEnum) {
        if (type) {
            this.type = type;
        }

        if(status){
            this.status = status;
        }
    }


}