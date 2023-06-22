import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    estufas: number[]= [2,3,4,5];
    /**
     * Constructor
     */
    constructor()
    {
        
    }
}
