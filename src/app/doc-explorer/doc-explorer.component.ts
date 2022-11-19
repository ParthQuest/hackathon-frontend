import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocExplorerService } from './doc-explorer.service';
import { DocExplorerVM as vm } from "./doc-explorer.model";
import { isNotEmptyArray } from '../common';

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
  filter: string = '';

  constructor(private docService: DocExplorerService) { }

  ngOnInit(): void {
    this.setFolderMenu();
    this.setFolderSpace();
  }

  setFolderMenu() {
    let recursiveMap = (items: Array<vm.IMenuItemResp>): Array<MenuItem> => items.map(x => ({
      label: x.Name,
      icon: "pi pi-folder",
      id: x.Id?.toString(),
      items: isNotEmptyArray(x.Items) ? recursiveMap(x.Items) : undefined,
      command: (event) => this.setFolderSpace(x.Name, x.Id)
    }));
    this.docService.getFolderMenu().then(items => {
      this.menuItems = recursiveMap(items);
    }).catch(error => { });
  }

  setFolderSpace(folderName?: string, folderId?: number) {
    this.docService.getFolderData(folderId).then(data => {
      this.selectedFolder = data;
      if (folderName && folderId)
        this.appendBreadcrumb(folderName, folderId);
      else
        this.breadcrumbItems = new Array<MenuItem>();
    }).catch(error => { });
  }

  onBreadcrumbClick(item: MenuItem) {
    let existingIndex = this.breadcrumbItems.findIndex(x => x.id == item.id);
    this.breadcrumbItems.splice(existingIndex);
  }

  appendBreadcrumb(label: string, id: number) {
    if (!~this.breadcrumbItems.findIndex(x => x.id == id.toString())) {
      this.breadcrumbItems = [ ...this.breadcrumbItems, {
        label: label,
        id: id.toString(),
        command: (event) => this.setFolderSpace(label, id)
      }];
    }
  }

}
