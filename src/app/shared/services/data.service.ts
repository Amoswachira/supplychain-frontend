import {Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { GlobalParams } from '../globalparams';

import { Config } from 'protractor';
import { ResponseWrapper } from '../wrappers/response-wrapper';



@Injectable({
  providedIn: 'root'
})
export class DataService<T, E> {
  token: string;

  constructor(
    private http: HttpClient,
    private globalParam: GlobalParams,
    private meta: Meta,
    
  ) {

  }

  getHeaders(header: string): HttpHeaders {
 
    switch (header) {

      case 'no-token':
        return new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
        });
        break;

      case 'form-data':
        return new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        break;

      default:
        return new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'

        });
        break;
    }
  }
 

  postNoToken(endpoint: string, data: T): Observable<ResponseWrapper<E>> {
    return this.http.post(this.globalParam.baseUrl + endpoint, JSON.stringify(data), {headers: this.getHeaders('no-token')}).pipe(
      catchError(this.handleError<any>())
    );
  }


  postFormData(endpoint: string, data: T): Observable<ResponseWrapper<E>> {
    const formData: FormData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    return this.http.post(this.globalParam.baseUrl + endpoint, formData, {headers: this.getHeaders('form-data')}).pipe(
      catchError(this.handleError<any>())
    );
  }

 

  putNoToken(endpoint: string, data: T): Observable<ResponseWrapper<E>> {
    return this.http.put(this.globalParam.baseUrl + endpoint, JSON.stringify(data), {headers: this.getHeaders('no-token')}).pipe(
      catchError(this.handleError<any>())
    );
  }


  getNoToken(endpoint: string, data?: Map<string, string>): Observable<ResponseWrapper<E>> {
    const options = {
      headers: this.getHeaders('no-token'),
      params: this.getHttpParams(data)
    };
    return this.http.get(this.globalParam.baseUrl + endpoint, options).pipe(
      catchError(this.handleError<any>())
    );
  }
  

  private getHttpParams(data: Map<string, string>): HttpParams {
    if (data === undefined) {
      return new HttpParams();
    }
    let httpParams: HttpParams = new HttpParams();
    data.forEach((value: string, key: string) => {
      httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }


  private handleError<ResponseWrapper>() {
    return (error: HttpErrorResponse): Observable<any> => {
      const res = new ResponseWrapper();
      // tslint:disable-next-line:triple-equals
      if (error.status == 500) {
        res.code = error.status;
        res.message = 'Sorry internal server error occured please try again later';
      } else {
        res.code = error.status;
        res.message = error.error.message;
       
      }
      return of(res);
    };
  }
}