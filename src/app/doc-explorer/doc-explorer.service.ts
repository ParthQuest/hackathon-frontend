import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api-service.service";
import { IAPIResponse, responseStatus } from "../common";
import { DocExplorerVM as vm } from "./doc-explorer.model";

@Injectable({
  providedIn: "root"
})
export class DocExplorerService {

  constructor(private apiService: ApiService) { }

  async getFolderData(folderId?: number) {
    let getReq: vm.IDMSGetReq = {
      FolderId: folderId
    };
    return this.apiService.POSTCallAsync<IAPIResponse<Array<vm.IDMSGetFileResp>>>(vm.UrlConst.GetFolder, getReq).then(response => {
      if (response.ResponseStatus == responseStatus.Success)
        return response.ResponseData;
      else
        throw new Error(response.ErrorData?.Error ?? response.Message);
    }).catch(error => {
      throw error;
    });
  }

  async getFolderMenu() {
    return this.apiService.GETCallAsync<IAPIResponse<Array<vm.IMenuItemResp>>>(vm.UrlConst.GetMenu).then(response => {
      if (response.ResponseStatus == responseStatus.Success)
        return response.ResponseData;
      else
        throw new Error(response.ErrorData?.Error ?? response.Message);
    }).catch(error => {
      throw error;
    });
  }

  async getSearchFiles(searchTerm: string, folderId?: number) {
    let req: vm.ISearchFileReq = {
      Name: searchTerm,
      FolderId: folderId
    }
    return this.apiService.POSTCallAsync<IAPIResponse<Array<vm.IGetFileWithTagResp>>>(vm.UrlConst.SearchFile, req).then(response => {
      if (response.ResponseStatus == responseStatus.Success)
        return response.ResponseData;
      else
        throw new Error(response.ErrorData?.Error ?? response.Message);
    }).catch(error => {
      throw error;
    });
  }

}