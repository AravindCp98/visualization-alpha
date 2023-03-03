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
    parsedData.forEach((element: string) => {
      return this.apiLsit.push(element);
    });

  }
  ngDoCheck() {
    // this.clearApiList()
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
    //alteranate methodd
    // const response = await fetch(getApi, {
    //   headers: {
    //     'Accept': 'application/json',
    //   },
    // });
    // const text = await response.text()
    // this.fectedData.push(text)

    if (getApi?.length) {
      if (!this.apiLsit.includes(getApi)) {
        this.apiLsit.push(getApi);
      }
      localStorage.setItem("apilist", JSON.stringify(getApi));
      this.fectedData = [];
      this.GetService.fetchApi(getApi)
        .then((data) => {
          if (data) {
            this.fectedData = [];
            this.fectedData.push(data);
            this.isfectch = false;
          }
        })
        .catch((err) => {
          console.log(err);
          this.isfectch = false;
          this.fectedData.push(err.status + err.statusText);
        });
    } else {
      this.apiLsit.push(this.getApi);
      localStorage.setItem("apilist", JSON.stringify(this.apiLsit));
      this.fectedData = [];
      this.GetService.fetchApi(this.getApi)
        .then((data) => {
          if (data) {
            this.fectedData.push(data);
            this.isfectch = false;
          }
        })
        .catch((err) => {
          console.log(err);
          this.isfectch = false;
          this.fectedData.push(err.status + "   " + err.statusText);
        });
    }
  }
  //post method functionality
  async initializePost() {
    // const url = this.getApi;
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Content-Length': '0',
    //   },
    // });

    // const text = await response.text();
    console.warn('method not implemented')
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
    console.log("n");
  }
}
