import { Injectable } from "@angular/core";
import { ApiService, IAPIResponse } from "../api-service/api-service.service";
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
    return this.apiService.POSTCallAsync<IAPIResponse<Array<vm.IDMSGetFileResp>>>(vm.UrlConst.DMSGet, getReq).then(response => {
      console.log(response);
    }).catch(error => {
      throw error;
    });
  }

}