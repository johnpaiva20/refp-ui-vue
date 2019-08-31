import { Enterprise } from './Enterprise';
import { ProjectType } from './ProjectType';

export class Project {
    id!: number;
    title!: string;
    aneelId!: string;
    duration!: number;
    status!: string;
    segment!: string;
    innovationPhase!: string
    sharingMethod!: string
    mainEnterprise!: Enterprise;
    type!:ProjectType;
}