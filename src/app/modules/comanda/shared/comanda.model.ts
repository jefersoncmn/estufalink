import { BaseResourceModel } from "app/shared/models/base-resource.model";

export class Comanda extends BaseResourceModel{ //Irá obter as mesmas variáveis e configurações do BaseResourceModel
    constructor(
        public numeroDaMesa?: number,
        public dataDeCadastro?: Date,
    ){
        super();//Chama o construtor do BaseResouceModel
    }

    static fromJson(jsonData: any): Comanda {
        return Object.assign(new Comanda(), jsonData);
    }
}