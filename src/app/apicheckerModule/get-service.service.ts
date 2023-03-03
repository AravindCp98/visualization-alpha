import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private httpClient: HttpClient) { }

  fetchApi(url: string) {
    return this.httpClient.get(url).toPromise();
  }
}