import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, finalize, firstValueFrom, map } from "rxjs";
import { GetParamsType } from "../common";
import { CommonSpinnerService } from "../common-spinner/common-spinner.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private spinnerService: CommonSpinnerService
  ) { }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  POSTCall<T>(apiEndPoint: string, reqBody: Object) {
    this.spinnerService.showSpinner();
    return this.http.post<T>(apiEndPoint, reqBody, {
      headers: this.getHeaders(),
      responseType: "json"
    }).pipe(map(response => {
      return response;
    }), catchError((err, caught) => {
      throw err;
    }), finalize(() => this.spinnerService.hideSpinner()));
  }

  GETCall<T>(apiEndPoint: string, params?: GetParamsType) {
    return this.http.get<T>(apiEndPoint, {
      headers: this.getHeaders(),
      responseType: "json",
      params: params
    }).pipe(map(response => {
      return response;
    }), catchError((err, caught) => {
      throw err;
    }), finalize(() => this.spinnerService.hideSpinner()));
  }

  async POSTCallAsync<T>(apiEndPoint: string, reqBody: Object) {
    return firstValueFrom(this.POSTCall<T>(apiEndPoint, reqBody));
  }

  async GETCallAsync<T>(apiEndPoint: string, params?: GetParamsType) {
    return firstValueFrom(this.GETCall<T>(apiEndPoint, params));
  }

}