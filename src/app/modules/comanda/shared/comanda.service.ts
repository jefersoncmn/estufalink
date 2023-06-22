import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'app/shared/services/base-resource.service';
import { Comanda } from './comanda.model';

@Injectable({
	providedIn: 'root'
})
export class ComandaService extends BaseResourceService<Comanda> {

	constructor(injector: Injector) { //Study Injector 
		super("http://localhost:8081/api/produtos/", injector, Comanda.fromJson)
	}

}
