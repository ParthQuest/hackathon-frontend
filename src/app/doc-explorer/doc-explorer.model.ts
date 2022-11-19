import { environment } from "../../environments/environment";
const dmsUrl: string = environment.dms;

export namespace DocExplorerVM {

  export const UrlConst = {
    DMSGet: `${dmsUrl}/dms/get`,
    DMSGetMenu: `${dmsUrl}/dms/getmenu`,
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

  export interface IFolderItemResp {
    Id: number;
    Name: string;
    ParentId: number;
  }

  export interface IMenuItemResp extends IFolderItemResp {
    Item: Array<IFolderItemResp>;
  }

}