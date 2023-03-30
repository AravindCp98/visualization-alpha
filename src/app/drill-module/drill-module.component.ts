import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drill-module',
  templateUrl: './drill-module.component.html',
  styleUrls: ['./drill-module.component.css']
})
export class DrillModuleComponent implements OnInit {
  images: any;
  imagePath: Array<string> = ["/assets/images/Hydraulic jar.jpg", "/assets/images/drillbit.jpg", "/assets/images/Representative-drill-string-system.png"]

  constructor() { }
 
  ngOnInit(): void {
    // this.
  }
  dragImage(path:string,index:number) {
    console.log('image dreagged', index)
    this.imagePath[index] = path
  }
  createHtmlElement(tag: string, width: number, height: number, color: string, unit?: string,) {
    debugger
    
    const element = document.createElement(tag)
    var ele = document.fullscreenElement
    ele?.requestFullscreen()
    ele?.requestFullscreen()
    const node = document.createTextNode("Hi there and greetings!");
    element.setAttribute('id','id1')
    element.appendChild(node)
    element.style.position= 'absolute'
    element.style.width = width + 'px'
    element.style.left = width + 'px'
    element.style.right = width + 'px'
    element.style.height = height + 'px'
    element.getBoundingClientRect().x = 200
    element.getBoundingClientRect().y=400
    element.style.color = color
  }
  

}
