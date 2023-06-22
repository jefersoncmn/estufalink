import { Component } from '@angular/core';
import { ComandaService } from '../shared/comanda.service';

@Component({
	selector: 'app-comanda-list',
	templateUrl: './comanda-list.component.html',
	styleUrls: ['./comanda-list.component.scss']
})
export class ComandaListComponent {

	constructor(private comandaService:ComandaService){}

	ngOnInit(){
		console.log("Start");
		this.comandaService.getAll().subscribe({
			complete: () => { console.log("deu bom") }, // completeHandler
			error: () => { console.log("deu ruim") },    // errorHandler 
			next: (data:any) => { console.log(data) },     // nextHandler
		});
	}
}
