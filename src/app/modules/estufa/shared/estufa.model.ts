import { BaseResourceModel } from "app/shared/models/base-resource.model";

export class Estufa extends BaseResourceModel{ //Irá obter as mesmas variáveis e configurações do BaseResourceModel
    constructor(
        public idEstufa?: number,
        public image?: string,
	    public ativa?: boolean
    ){
        super();//Chama o construtor do BaseResouceModel
    }

    static fromJson(jsonData: any): Estufa {
        return Object.assign(new Estufa(), jsonData);
    }
}