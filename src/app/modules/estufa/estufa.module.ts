import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstufaRoutingModule } from './estufa-routing.module';
import { EstufaListComponent } from './estufa-list/estufa-list.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { NgApexchartsModule } from 'ng-apexcharts/lib/ng-apexcharts.module';
import { EstufaDetailComponent } from './estufa-detail/estufa-detail.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
	declarations: [
		EstufaListComponent,
		EstufaDetailComponent
	],
	imports: [
		CommonModule,
		EstufaRoutingModule,
		FuseCardModule,
		MatButtonModule,
        MatIconModule,
		NgApexchartsModule
	]
})
export class EstufaModule { }
