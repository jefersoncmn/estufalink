import { Component } from '@angular/core';

@Component({
  selector: 'app-estufa-detail',
  templateUrl: './estufa-detail.component.html',
  styleUrls: ['./estufa-detail.component.scss']
})
export class EstufaDetailComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [12, 17, 22, 19, 22, 25, 17, 27, 14]
        }
      ],
      chart: {
        // height: 350,
        type: "line"
      },
      title: {
        text: "Temperatura"
      },
      xaxis: {
        categories: ["17/06", "18/06",  "19/06",  "20/06",  "21/06",  "22/06",  "23/06",  "24/06", "25/06"]
      }
    };
  }
}
