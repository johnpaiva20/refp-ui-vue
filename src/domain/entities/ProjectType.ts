export class ProjectType {
    id!: string;
    description!: string;
    active!: boolean;

    constructor(id?: string) {
        if (id) {
            this.id = id;
        }
    }
}