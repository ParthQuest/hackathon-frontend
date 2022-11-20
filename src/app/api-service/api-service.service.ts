import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, firstValueFrom, map } from "rxjs";
import { GetParamsType } from "../common";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeaders(isAuth?:boolean) {
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json'
    });
    if (isAuth)
      headers = headers.set('authorization', 'Basic YWNjXzVjOTRiMTY0NTdjZGI1Yjo3YWE3MDA5Y2UwNjBkOWRkYTMxNmM4MTQwMWVkNWRiOQ==');
    return headers;
  }

  POSTCall<T>(apiEndPoint: string, reqBody: Object, isAuth?:boolean) {
    return this.http.post<T>(apiEndPoint, reqBody, {
      headers: this.getHeaders(isAuth),
      responseType: "json"
    }).pipe(map(response => {
      return response;
    }), catchError((err, caught) => {
      throw err;
    }));
  }

  GETCall<T>(apiEndPoint: string, params?: GetParamsType, isAuth?:boolean) {
    return this.http.get<T>(apiEndPoint, {
      headers: this.getHeaders(isAuth),
      responseType: "json",
      params: params
    }).pipe(map(response => {
      return response;
    }), catchError((err, caught) => {
      throw err;
    }));
  }

  async POSTCallAsync<T>(apiEndPoint: string, reqBody: Object, isAuth?:boolean) {
    return firstValueFrom(this.POSTCall<T>(apiEndPoint, reqBody, isAuth));
  }

  async GETCallAsync<T>(apiEndPoint: string, params?: GetParamsType, isAuth?:boolean) {
    return firstValueFrom(this.GETCall<T>(apiEndPoint, params, isAuth));
  }

}