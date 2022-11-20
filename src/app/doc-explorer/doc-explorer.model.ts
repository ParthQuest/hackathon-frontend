import { TreeNode } from "primeng/api";
import { environment } from "../../environments/environment";
const dmsUrl: string = environment.dms;

export namespace DocExplorerVM {

  export const UrlConst = {
    GetFolder: `${dmsUrl}/dms/get`,
    GetMenu: `${dmsUrl}/dms/getmenu`,
    SearchFile: `${dmsUrl}/dms/search`
  };

  export interface IDMSGetReq {
    FolderId?: number;
  }

  export interface ISearchFileReq extends IDMSGetReq {
    Name: string;
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
    Items: Array<IMenuItemResp>;
  }

  export interface IGetFileWithTagResp extends IDMSGetFileResp {
    Tags: string;
  }

  export const errorImgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";


  export interface INodeSelectEvent {
    originalEvent: Event;
    node: TreeNode;
  }

}