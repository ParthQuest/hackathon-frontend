import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocExplorerService } from './doc-explorer.service';
import { DocExplorerVM as vm } from "./doc-explorer.model";

@Component({
  selector: 'app-doc-explorer',
  templateUrl: './doc-explorer.component.html',
  styleUrls: ['./doc-explorer.component.scss']
})
export class DocExplorerComponent implements OnInit {

  menuItems = new Array<MenuItem>();
  breadcrumbItems = new Array<MenuItem>();
  home: MenuItem = { icon: 'pi pi-home', command: (event) => this.setFolderSpace() };
  selectedFolder = new Array<vm.IDMSGetFileResp>();

  constructor(private docService: DocExplorerService) { }

  ngOnInit(): void {
    this.setFolderMenu();
    this.setFolderSpace();
  }

  setFolderMenu() {
    let recursiveMap = (item: vm.IMenuItemResp): MenuItem => {
      return {
        label: item.Name,
        icon: "pi pi-folder",
        id: item.Id?.toString(),
        items: item.Item?.map(x => recursiveMap(x))
      };
    };
    this.docService.getFolderMenu().then(items => {
      this.menuItems = items.map(x => recursiveMap(x));
    }).catch(error => { });
  }

  setFolderSpace(folder?: vm.IDMSGetFileResp) {
    this.docService.getFolderData(folder?.Id).then(data => {
      this.selectedFolder = data;
      if (folder)
        this.appendBreadcrumb(folder);
      else
        this.breadcrumbItems = new Array<MenuItem>();
    }).catch(error => { });
  }

  onBreadcrumbClick(item: MenuItem) {
    let existingIndex = this.breadcrumbItems.findIndex(x => x.id == item.id);
    this.breadcrumbItems.splice(existingIndex);
  }

  appendBreadcrumb(item: vm.IDMSGetFileResp) {
    this.breadcrumbItems = [ ...this.breadcrumbItems, {
      label: item.Name,
      id: item.Id?.toString(),
      command: (event) => this.setFolderSpace(item)
    }];
  }


}
