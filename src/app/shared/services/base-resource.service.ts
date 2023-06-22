import { Observable, catchError, map, throwError } from "rxjs";
import { BaseResourceModel } from "../models/base-resource.model";
import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//Classe feita para lidar com classes genéricas que extender BaseResouceModel
export abstract class BaseResourceService<T extends BaseResourceModel>{

    protected http: HttpClient;

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFunction: (jsonData : any) => T
        ){
            this.http = injector.get(HttpClient) //Angular irá retornar uma instancia do HTTPClient
        }
    
    getAll(): Observable<T[]>{
        return this.http.get(this.apiPath).pipe(
            catchError(this.handleError),
            map(this.jsonDataToResources.bind(this)),
        )
    }
    
    getById(id: string): Observable<T>{
        const url = this.apiPath+"/"+id;

        return this.http.get(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }

    create(resource: T): Observable<T>{
        return this.http.post(this.apiPath, resource).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }

    update(resource : T): Observable<T>{
        const url = this.apiPath+"/"+resource.id;

        return this.http.put(url, resource).pipe(
            map(()=>resource),
            catchError(this.handleError)
        )
    }

    delete(id: string): Observable<any>{
        const url = this.apiPath+"/"+id;

        return this.http.delete(url).pipe(
            map(()=> null),
            catchError(this.handleError)
        )
    }

    //Métodos protegidos, permite que quem herdar essa classe poderá ter acesso ainda a essas funções

    protected jsonDataToResources(jsonData: any[]) : T[]{
        const resources: T[] = [];
        jsonData.forEach(
            element => resources.push(this.jsonDataToResourceFunction(element))
        );
        return resources;
    }

    protected jsonDataToResource(jsonData: any): T {
        return this.jsonDataToResourceFunction(jsonData);
    }

    protected handleError(error: any): Observable<any>{
        console.log("Erro na requisição => ", error);
        return throwError(error);
    }
}
