import { AccountCategory } from './AccountCategory';
import { Enterprise } from './Enterprise';
import { ProjectType } from './ProjectType';
import { ProjectEnterprise } from './ProjectEnterprise';
import { ServiceOrder } from './ServiceOrder';
import { Product } from './Product';
import { Topic } from './Topic';
import { Subtopic } from './Subtopic';
import { ProjectStatusEnum } from '../enums/ProjectStatusEnum';
import { ProjectTypeEnum } from '../enums/ProjectTypeEnum';

export class Project {
    id!: number;
    title!: string;
    aneelId!: string;
    status!: ProjectStatusEnum;
    segment!: string;
    innovationPhase!: string
    sharingMethod!: string
    mainEnterprise: Enterprise = new Enterprise();
   
    rbMatCons!:number;
    rbMatPerm!:number;
    rbOutros!:number;
    rbRH!:number;
    rbServTerc:number;
    rbViaDia:number;

    type!: ProjectTypeEnum; 
    enterprises: ProjectEnterprise[] = [];
    accountCategories: AccountCategory[] = [];
    serviceOrder: ServiceOrder = new ServiceOrder();
    product: Product = new Product();
    topic: Topic = new Topic();
    subtopic: Subtopic = new Subtopic();
    progress: number = 0;

    constructor(type?: ProjectTypeEnum, status?: ProjectStatusEnum) {
        if (type) {
            this.type = type;
        }

        if (status) {
            this.status = status;
        }
    }


}