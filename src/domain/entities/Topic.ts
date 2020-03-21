import { ProjectType } from './ProjectType';

export class Topic {
    id: number;

    description: string;

    priority: boolean;

    initials: string;

    projectType: ProjectType = new ProjectType;

}