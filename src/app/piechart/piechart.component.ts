import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service'

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  livedata: any[] = [];
  
  data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
   config = {
    type: 'pie',
    data: this.data,
  };

  // chart: Chart | undefined
  constructor(private subscribeFromSocket: SampleServiceService) { }


  ngOnInit(): void {
    this.getLiveDta();
  }

  drawPiechart() {
    let ctx = document.getElementById("pieChart") as HTMLCanvasElement;
    // this.chart = new Chart(ctx,this.config as any)
  }
  getLiveDta() {
    console.log(this.livedata)
  }

}
