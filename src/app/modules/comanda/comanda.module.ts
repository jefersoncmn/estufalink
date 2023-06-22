import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandaListComponent } from './comanda-list/comanda-list.component';
import { comandaRoutes } from './comanda.routing';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ComandaListComponent
	],
	imports: [
		RouterModule.forChild(comandaRoutes),
		CommonModule,
		SharedModule,
	]
})
export class ComandaModule { }
