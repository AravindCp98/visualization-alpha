import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-api-checker',
  templateUrl: './api-checker.component.html',
  styleUrls: ['./api-checker.component.css']
})
export class ApiCheckerComponent implements OnInit {
  getApi: string = ''
  fectedData: any = []
  objectKeys: any = []
  apiLsit:Array<string> =[]

  constructor(private GetService: GetServiceService) { }

  ngOnInit(): void {
  }
  initializeGetMethod(getApi?:string) {
    this.apiLsit.push(this.getApi)
    this.apiLsit = [...new Set(this.apiLsit)]
    if (getApi?.length) {
      this.GetService.fetchApi(getApi).subscribe((response: any) => {
        this.fectedData = [];
        this.fectedData = response;
      });
    }
    else {
      this.GetService.fetchApi(this.getApi).subscribe((response: any) => {
        this.fectedData = [];
        this.fectedData = response;
      });
    }


  }

}
