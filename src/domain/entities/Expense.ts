import { Reciver } from './Reciver';

export class Expense {
    project: number;
    accountCategory: String;
    data: Date;
    documentNumber: String
    documentType: String
    receiver: Reciver = new Reciver();
    justification: String;
    file: File;
    value: number
}