import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto';

export interface DataSets {
  label: string,
  data: string[],
  backgroundColor: string
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit{

  public chart: any;
  @Input() dataSets: DataSets[];

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17'],
        datasets: this.dataSets,
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}
