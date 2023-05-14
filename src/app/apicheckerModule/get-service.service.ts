import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private httpClient: HttpClient) { }
  
async fetchApi(url:string):Promise<Observable<any>>{
  console.log('fecting started')
  return this.httpClient.get(url)
  
}
}