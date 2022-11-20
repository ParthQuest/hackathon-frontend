import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api-service.service";
import { responseStatus } from "../common";
const imaggaapiKey = "acc_5c94b16457cdb5b";
const imaggaapiSecret = "7aa7009ce060d9dda316c81401ed5db9";
const imaggaURL = 'https://api.imagga.com/v2/tags?image_url=';
const saveTag = "http://localhost:7040/api/dms/savefile"


@Injectable({
  providedIn: "root"
})
export class ImgUploaderService { 
  constructor(private apiService: ApiService) {
   }

  async getCategoryList(url:string) {
    const imaggaUrl = 'https://api.imagga.com/v2/categories/personal_photos';
    return this.apiService.GETCallAsync<any>(imaggaUrl, {image_url: url},true).then(response => {
      if (response.status.type == "success")
        return response.result;
      else
        throw new Error(response.ErrorData?.Error ?? response.Message);
    }).catch(error => {
      debugger
      throw error;
    });
  }

  async getTagList(url:string) {
    const imaggaUrl = 'https://api.imagga.com/v2/tags?image_url=';
    return this.apiService.GETCallAsync<any>(imaggaUrl, {image_url: url},true).then(response => {
      if (response.status.type == "success")
        return response.result;
      else
        throw new Error(response.ErrorData?.Error ?? response.Message);
    }).catch(error => {
      debugger
      throw error;
    });
  }

  async saveTag(req) {
    return this.apiService.POSTCallAsync<any>(saveTag,req).then(response => {
      if (response.ResponseStatus == responseStatus.Success)
      return response.ResponseData;
    else
      throw new Error(response.ErrorData?.Error ?? response.Message);
  }).catch(error => {
    throw error;
  });
  }
}