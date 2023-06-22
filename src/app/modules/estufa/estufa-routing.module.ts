import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstufaListComponent } from './estufa-list/estufa-list.component';
import { EstufaDetailComponent } from './estufa-detail/estufa-detail.component';

const routes: Routes = [
	{
		path: '',
		component: EstufaListComponent
	},
	{
		path:':id',
		component: EstufaDetailComponent
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EstufaRoutingModule { }
