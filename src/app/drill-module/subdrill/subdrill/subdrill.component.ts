import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subdrill',
  templateUrl: './subdrill.component.html',
  styleUrls: ['./subdrill.component.css']
})
export class SubdrillComponent implements OnInit {

  constructor() { }
  inputValue: string = ''
  @Input() imagePathVal: Array<string> | string = []; 

  ngOnInit(): void {
    console.table(this.imagePathVal)
  }
  

}
