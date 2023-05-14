import { Component, OnInit } from "@angular/core";
import { GetServiceService } from "../get-service.service";

@Component({
  selector: "app-api-checker",
  templateUrl: "./api-checker.component.html",
  styleUrls: ["./api-checker.component.css"],
})
export class ApiCheckerComponent implements OnInit {
  getApi: string = "";
  fectedData: any = [];
  objectKeys: any = [];
  apiLsit: Array<string> = [];
  isfectch: boolean = true;
  httpMethod: Array<string> = ['Get', 'Post', 'Put', 'Delete']
  selectedHttpMethod: string = 'Get'

  constructor(private GetService: GetServiceService) { }

  ngOnInit(): void {
    this.apiLsit = [];
    const parsedData = JSON.parse(localStorage.getItem("apilist")!);
    parsedData.length && parsedData.forEach((element: string) => {
      return this.apiLsit.push(element);
    });

  }
  //get method functionality
  fetchAPiData() {
    switch (this.selectedHttpMethod) {
      case 'Get':
        this.initializeHttpMethod();
        break
      case 'Post':
        this.initializePost();

    }
  }
  async initializeHttpMethod(getApi?: string) {
    if (getApi?.length) {
      // this.fectedData = this.GetService.fetchApi(getApi)
      (await this.GetService.fetchApi(getApi)).subscribe((e:any)=>{ 
        console.log(e)
        this.fectedData = e;
        console.log(this.fectedData)
      })
    }
    else {
      // this.fectedData = this.GetService.fetchApi(this.getApi)
      (await this.GetService.fetchApi(this.getApi)).subscribe((e:any)=>{
        console.log(e)
        this.fectedData = e;
        console.log(this.fectedData)
      })
    }
  }

  //post method functionality
  async initializePost() {
    const url = this.getApi;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': '0',
      },
    });
    const ResultText = await response.text();
    return ResultText;
  }

  enterKeypress(event: any) {
    if (event.key.toLocaleLowerCase() == "enter" && this.getApi.length) {
      this.initializeHttpMethod();
    }
  }

  clearApiList() {
    this.apiLsit = [];
    this.fectedData = [];
    localStorage.clear();
  }
}
