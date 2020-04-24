export enum ProjectStatusEnum {
    InProgress = 'IN_PROGRESS',
    Cancelled = 'CANCELLED',
    Finished = 'FINISHED',
    AboutToBegin = 'ABOUT_TO_BEGIN',
}

export default class ProjectStatus {
    static projectStatus(status: string): string {
        switch (status) {
            case ProjectStatusEnum.InProgress:
                return 'Em andamento';
            case ProjectStatusEnum.Cancelled:
                return 'Cancelado';
            case ProjectStatusEnum.Finished:
                return 'Finalizado';
            case ProjectStatusEnum.AboutToBegin:
                return 'A ser iniciado em breve';
            default:
                return 'Indefinido';
        }
    }


}