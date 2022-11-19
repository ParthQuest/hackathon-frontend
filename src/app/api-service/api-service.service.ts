import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, firstValueFrom, map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  POSTCall<T>(apiEndPoint: string, reqBody: Object) {
    return this.http.post<T>(apiEndPoint, reqBody, {
      headers: this.getHeaders(),
      responseType: "json"
    }).pipe(map(response => {
      return response;
    }), catchError((err, caught) => {
      throw err;
    }));
  }

  GETCall<T>(apiEndPoint: string, params: GetParamsType) {
    return this.http.get<T>(apiEndPoint, {
      headers: this.getHeaders(),
      responseType: "json",
      params: params
    }).pipe(map(response => {
      return response;
    }), catchError((err, caught) => {
      throw err;
    }));
  }

  async POSTCallAsync<T>(apiEndPoint: string, reqBody: Object) {
    return firstValueFrom(this.POSTCall(apiEndPoint, reqBody));
  }

  async GETCallAsync(apiEndPoint: string, params: GetParamsType) {
    return firstValueFrom(this.GETCall(apiEndPoint, params));
  }

}

export type GetParamsType = HttpParams | {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
};

export interface IAPIErrorData {
  ErrorCode: string;
  Error: string;
  ErrorDetail: Object;
}

export interface IAPIResponse<T> {
  ErrorData: IAPIErrorData;
  Message: string;
  ResponseData: T;
  ResponseStatus: string;
}