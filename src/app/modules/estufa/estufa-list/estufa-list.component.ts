import { Component } from '@angular/core';
import { Estufa } from '../shared/estufa.model';

// interface Estufa{
// 	idEstufa?: number,
// 	image: string,//TODO change to image
// 	ativa: boolean
// }

@Component({
	selector: 'app-estufa-list',
	templateUrl: './estufa-list.component.html',
	styleUrls: ['./estufa-list.component.scss']
})
export class EstufaListComponent {

	estufas: Estufa[] = [
		new Estufa(1,'image1',true),
		new Estufa(2,'image2',false),
		new Estufa(3,'image3',false),
		new Estufa(4,'image4',true),
		new Estufa(5,'image5',true),
	];
	
	ngOnInit(){
		
	}
}
