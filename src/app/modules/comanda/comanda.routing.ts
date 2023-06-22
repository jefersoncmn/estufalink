import { Route } from '@angular/router';
import { ComandaListComponent } from './comanda-list/comanda-list.component';

export const comandaRoutes: Route[] = [
    {
        path     : '',
        component: ComandaListComponent
    }
];
