import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api-service.service";
import { responseStatus } from "../common";
const imaggaapiKey = "acc_5c94b16457cdb5b";
const imaggaapiSecret = "7aa7009ce060d9dda316c81401ed5db9";
const imaggaURL = 'https://api.imagga.com/v2/tags?image_url=';

@Injectable({
  providedIn: "root"
})
export class ImgUploaderService { 
  constructor(private apiService: ApiService) { }

  async getTagList(url:string) {
    var imaggaUrl = imaggaURL + encodeURIComponent(url);
    return this.apiService.GETCallAsync<any>(imaggaUrl, {username: imaggaapiKey, password: imaggaapiSecret}).then(response => {
      if (response.ResponseStatus == responseStatus.Success)
        return response.ResponseData;
      else
        throw new Error(response.ErrorData?.Error ?? response.Message);
    }).catch(error => {
      throw error;
    });
  }
}