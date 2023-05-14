import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private httpClient: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Service side error ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
//  async fetchApi(url: string) Observable<any> {
//     return this.httpClient.get(url);
//   }

async fetchApi(url:string):Promise<Observable<any>>{
  console.log('fecting started')
  return this.httpClient.get(url)
  
}
}