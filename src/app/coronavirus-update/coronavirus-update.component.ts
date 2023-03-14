import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../apicheckerModule/get-service.service';
import * as dat from 'dat.gui';


@Component({
  selector: 'app-coronavirus-update',
  templateUrl: './coronavirus-update.component.html',
  styleUrls: ['./coronavirus-update.component.css']
})
export class CoronavirusUpdateComponent implements OnInit {
  fetchedData: any = []
  filteredData: any = []
  serviceApi: string = "https://data.covid19india.org/v4/min/data.min.json"
  disctict: any = []
  confirmedL: any = []
  vaccinated1: number[] = []
  vaccinated2: number[] = []
  canWidth: any = window.innerWidth+'px';
  canHeight:any= window.innerHeight+'px'
  canvasId: Array<string> = ["tutorial", "linechart", "sinWawe", "rotateDrill"]



  constructor() { }

  async ngOnInit() {

    await this.fetchApi()
    if (this.fetchedData && this.fetchedData[0]) {
      this.fetchedData = Object.values(this.fetchedData[0])
      Object.values(this.fetchedData).map((ele: any) => ele.total ? this.confirmedL.push(ele.total.confirmed) : 1)
      Object.values(this.fetchedData).map((ele: any) => ele.total ? this.vaccinated1.push(ele.total.vaccinated1) : 1)
      Object.values(this.fetchedData).map((ele: any) => ele.total ? this.vaccinated2.push(ele.total.vaccinated2) : 1)
      Object.values(this.fetchedData).map((ele: any) => ele && ele.districts ? this.disctict.push(Object.values(ele.districts)) : '')

    }
    this.drawCanvas()
    this.drawCavasGrid("tutorial", 'red')
    this.SinWawe()
    this.lineChart()

    setInterval(this.rotateDrillBit,200)

  }
  ngDoCheck() {
    // this.SinWawe();
  }
  async fetchApi() {
    console.log('Performing GET operation');
    await fetch(this.serviceApi)
      .then(response => response.json())
      .then(data => this.fetchedData.push(data));
  } catch(error: any) {
    console.log(error.message)
  }

  drawCanvas() {

    const canvas = document.getElementById("tutorial") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.drawCavasGrid("tutorial", "#05ecf0")
    // this.drawCavasGrid('sinWawe', '#5e9167')
    for (let i = 0; i <= this.vaccinated1.length; i++) {
      // ctx.fillStyle = "#132e59"  
      ctx.beginPath();
      ctx.ellipse(Object.values(this.vaccinated1)[i] / 90000, i, Math.PI / 2, Math.PI / 2, Math.PI / 3, 0, 2 * Math.PI, false)
      ctx.arc(Object.values(this.vaccinated1)[i] / 90000, i, 5, 5, 5 * Math.PI);
      ctx.shadowColor = "green";
      ctx.shadowOffsetX = 1;
      ctx.lineWidth = 1
      ctx.fill()
      ctx.fillRect(3999, 30, 3000, 30);

    }
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(3999, 30, 3000, 30);
  }
  drawCavasGrid(id: string, color: string) {
    const canvas = document.getElementById(`${id}`) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const gridPadding = 0.1;
    for (let x = 0; x <= canvasWidth; x += 20) {
      ctx.moveTo(0.5 + x + gridPadding, gridPadding);
      ctx.lineTo(0.5 + x + gridPadding, canvasHeight + gridPadding);
    }
    for (let x = 0; x <= canvasHeight; x += 20) {
      ctx.moveTo(gridPadding, 0.5 + x + gridPadding);
      ctx.lineTo(canvasWidth + gridPadding, 0.5 + x + gridPadding);
    }
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  lineChart() {
    const canvas = document.getElementById("linechart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    //drawing y axis line 
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);

    //drawing x axis line
    ctx.moveTo(0, canvasHeight / 2)
    ctx.lineTo(canvasWidth, canvasHeight / 2)

    const plus_MinusX = canvas.width / 2
    const plus_MinusY = canvas.height / 2

    for (let minusX = 0; minusX <= plus_MinusX / 15; minusX++) {
      ctx.fillText(minusX.toLocaleString(), minusX * 8, canvasHeight / 2, 10)
    }


    ctx.lineWidth = 1.1
    ctx.stroke();
    canvas.style.backgroundColor = '#d0e3cf'

  }
  SinWawe() {
    const canvas = document.getElementById("sinWawe") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    const wawe = {
      y: canvasHeight / 2,
      length: 0.1,
      amplitude: 100,
      frequency: 0.01
    }
    const strokeColor = {
      h: 200,
      s: 50,
      l: 50
    }

    const gui = new dat.GUI();
    gui.add(wawe, 'y', canvasHeight)
    gui.add(wawe, 'length', -0.01, 0.01)
    gui.add(wawe, 'amplitude', -300, 300)
    gui.add(wawe, 'frequency', -0.01, 1)
    // gui.add(strokeColor,'h',255)



    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      const grd = ctx.createLinearGradient(195, 198, 200, 1);
      grd.addColorStop(0, "#279ecd");
      grd.addColorStop(1, "#717bb9");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)
      ctx.beginPath()
      ctx.moveTo(0, canvasHeight / 2)
      let increment = wawe.frequency

      for (let i = 0; i <= canvasWidth; i++) {
        ctx.lineTo(i, wawe.y + Math.sin(i * wawe.length * Math.random()) * 20)

      }
      ctx.stroke();
      ctx.strokeStyle = 'hsl(358, 87%, 30%)'
      increment = wawe.frequency + wawe.frequency
      // console.log('animatre', increment)
    }
    animate();

  }

  rotateDrillBit() {
    const canvas = document.getElementById("rotateDrill") as HTMLCanvasElement;
   
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const canvasHeight = canvas.height
    const canvasWidth = canvas.width
    const img = new Image()
    const animateDrillBit = () => {
      requestAnimationFrame(animateDrillBit)
      img.onload = () => {
        //ensure image is loaded 
        ctx.beginPath();
        let increaseX = canvasWidth * Math.random()
        let IncreaseY = canvasHeight * Math.random()
        ctx.clearRect(increaseX, IncreaseY, canvasHeight, canvasWidth) 
        for (let i = 0; i <= 0; i++){   
          // ctx.clearRect(canvasWidth, canvasHeight, canvasWidth, canvasHeight)
          // ctx.drawImage(img, increaseX, IncreaseY, 80, 80);
          ctx.moveTo(1, IncreaseY)
          ctx.lineTo(increaseX, IncreaseY)
        }
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#4ead05'
        ctx.stroke();
        console.log('animating bit', increaseX, IncreaseY)
      };
    }
    img.src = 'assets/images/drillbit.jpg';
 
   

    ctx.stroke()
    animateDrillBit();
  }
  expandWidget(id: string,method:string) {
    console.log(id, 'id')
    const widget = document.getElementById(id) as HTMLCanvasElement
    const div = document.getElementById('div'+id) as HTMLDivElement
    // widget.height = window.innerHeight;
    // widget.width= window.innerWidth
    if (method == 'close') {
      widget.style.visibility = 'hidden'
      widget.remove()
      div.style.visibility = 'hidden'
      div.remove()
    }
    else {
      // widget.width = window.innerWidth;
      // widget.height = window.innerHeight;
      // div.style.height = window.innerHeight + 'px';
      // div.style.width = window.innerWidth + 'px';
      this.canvasId.forEach((eleID: string) => {
        if (eleID !== id) {
          const uncheckedCanvasEle = document.getElementById(eleID) as HTMLCanvasElement
          const uncheckedDiv = document.getElementById('div'+eleID) as HTMLDivElement
          uncheckedCanvasEle.remove()
          uncheckedDiv.remove()
          return
        }
      })
    }
  }

}


