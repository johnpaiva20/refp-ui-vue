import { Reciver } from './Reciver';

export class Expense {
    id:number
    documentNumber: String
    recipient:String ;
    cpfCnpj:String;
    documentType: String
    justify: String ;
    value: number ;
    data: Date;
    expenseType: String;
    status:boolean = false;
    image: String = '';
    projResource: Projeto = new Projeto();
}

class Projeto{
    codigo:number
    codigoAneel:String
    titulo:String
}