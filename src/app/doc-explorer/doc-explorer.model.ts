import { environment } from "../../environments/environment";
const dmsUrl: string = environment.dms;

export namespace DocExplorerVM {

  export const UrlConst = {
    DMSGet: `${dmsUrl}/dms/get`
  };

  export interface IDMSGetReq {
    FolderId?: number;
  }
  export interface IDMSGetFileResp {
    Id: number;
    Name: string;
    FileUrl: string;
    Path: string;
    IsFolder: boolean;
  }

}