import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'app/shared/services/base-resource.service';
import { Estufa } from './estufa.model';

@Injectable({
	providedIn: 'root'
})
export class EstufaService extends BaseResourceService<Estufa> {

	constructor(injector: Injector) { //Study Injector 
		super("http://localhost:8081/api/estufa/", injector, Estufa.fromJson)
	}

}
