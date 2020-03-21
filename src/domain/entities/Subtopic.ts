import { Topic } from './Topic';

export class Subtopic {
    id: number;

    description: string;

    priority: boolean;

    initials: string;

    topic: Topic = new Topic();
}