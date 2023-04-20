// @ts-ignore
import { Component, Input, OnInit } from '@angular/core';
import 'echarts-gl';
import * as echarts from 'echarts'
import { SampleServiceService } from '../sample-service.service'
import { RandomNumberGenerator } from '../serviceModule'



@Component({
  selector: 'app-drill-module',
  templateUrl: './drill-module.component.html',
  styleUrls: ['./drill-module.component.css']
})
export class DrillModuleComponent implements OnInit {
  images: any;
  imagePath: Array<string> = ["/assets/images/Hydraulic jar.jpg", "/assets/images/drillbit.jpg", "/assets/images/Representative-drill-string-system.png"]
  data:Array<any> =[]
  option = {
  tooltip: {},
    backgroundColor: '#4d4b48',
    visualMap: {
    show: true,
    dimension:2,
    min: 10,
    max: 30,
    inRange: {
      color: [
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#a86b32',
        '#a86b32',
        '#fa0a3a',
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
      ]
    }
  },
  xAxis3D: {
    type: 'value'
  },
  yAxis3D: {
    type: 'value'
  },
  zAxis3D: {
    type: 'value'
  },
  grid3D: {
    viewControl: {
      projection: 'orthographic'
    }
  },
  series: [
    {
      type: 'line3D',
      data: this.data,
      lineStyle: {
        width: 5
      }
    }
  ]
  } as unknown as any
  xyzAxis:Array<any> =[]

  constructor(private subscribeSocket: SampleServiceService) { }

  @Input() itemData =''

  ngOnInit(): void {
    this.drawThreeDcurve()
    setInterval(() => {
      this.drawThreeDcurve()
    }, 500);
    const abc = this.subscribeSocket.subscribeFromWss()
    setTimeout(() => {
      console.log(this.xyzAxis)
      // abc.unsubscribe()
    },2000);
   
  }

  dragImage(path: string, index: number) {
    this.imagePath[index] = path
  }
  drawLine(isDrawMode: boolean) {
    this.option.series[0].data=[]
    if (isDrawMode) {
      for (var t = 0; t < 25; t += 1) {
        const x = (Math.cos(75 * t) + Math.random())
        const y = (Math.random() + 0.25 * Math.tanh(75 * t))
        const z = t + 2.0 * Math.sin(75 * t) + Math.random();
        this.option.series[0].data.push([x, y, z]);

      }
    }
    else {
      this.option.series[0].data = [];
      this.drawThreeDcurve();
    }

    // this.drawLine();
  }
  drawThreeDcurve() {
    this.drawLine(true)
    const chartDom = document.getElementById('main') as HTMLDivElement;
    var myChart = echarts.init(chartDom);
      myChart.setOption(this.option);

  }
  clearDrawing() {
    this.data = [];
    console.log(this.data, 'data')
    this.option.series[0].data = [];
    this.drawLine(false)
    this.drawThreeDcurve();
  
    // this.drawThreeDcurve()
  }
  restart() {
    this.drawLine(true)
    this.drawThreeDcurve();
    // this.option.series[0].data = [];
  }
}

