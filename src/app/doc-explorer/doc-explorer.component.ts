import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocExplorerService } from './doc-explorer.service';
import { DocExplorerVM as vm } from "./doc-explorer.model";
import { isDefined, isNotEmptyArray } from '../common';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-doc-explorer',
  templateUrl: './doc-explorer.component.html',
  styleUrls: ['./doc-explorer.component.scss']
})
export class DocExplorerComponent implements OnInit {

  menuItems = new Array<TreeNode>();
  breadcrumbItems = new Array<MenuItem>();
  home: MenuItem = { icon: 'pi pi-home', command: (event) => this.setFolderSpace() };
  selectedFolder = new Array<vm.IDMSGetFileResp>();
  searchText: string = '';
  errorImgSrc: string = vm.errorImgSrc;

  constructor(private docService: DocExplorerService) { }

  ngOnInit(): void {
    this.setFolderMenu();
    this.setFolderSpace();
  }

  setFolderMenu() {
    let recursiveMap = (items: Array<vm.IMenuItemResp>): Array<TreeNode> => items.map(x => {
      let item: TreeNode;
      item = {
        label: x.Name,
        collapsedIcon: "pi pi-folder",
        expandedIcon: "pi pi-folder-open",
        data: x.Id,
        children: isNotEmptyArray(x.Items) ? recursiveMap(x.Items) : undefined
      };
      return item;
    });
    this.docService.getFolderMenu().then(items => {
      this.menuItems = recursiveMap(items);
    }).catch(error => { });
  }

  setFolderSpace(folderId?: number) {
    this.docService.getFolderData(folderId).then(data => {
      this.selectedFolder = data;
      this.setBreadcrumbs(folderId);
    }).catch(error => { });
  }

  setSearchTerm() {
    let lastBreadcrumb = this.breadcrumbItems[this.breadcrumbItems.length - 1];
    this.docService.getSearchFiles(this.searchText, lastBreadcrumb?.id ? +lastBreadcrumb.id : undefined).then(list => {
      this.selectedFolder = list;
      this.setBreadcrumbs();
    }).catch(error => { });
  }

  setBreadcrumbs(id?: number) {
    let breadcrumbs = new Array<MenuItem>();
    if (id) {
      let recursiveFind = (items: Array<TreeNode>, folderId: number) => {
        function iter(a: TreeNode) {
          if (a.data === folderId) {
            result = a;
            return true;
          }
          return Array.isArray(a.children) && a.children.some(iter);
        }

        let result: TreeNode = { };
        items.some(iter);
        return result;
      }
      let folderNode = recursiveFind(this.menuItems, id);
      // breadcrumbs = folderNode.
    }
    this.breadcrumbItems = breadcrumbs;
  }

  onFileSearch() {
    if (this.searchText)
      this.setSearchTerm();
    else
      this.setFolderSpace();
  }

  onBreadcrumbClick(item: MenuItem) {
    let existingIndex = this.breadcrumbItems.findIndex(x => x.id == item.id);
    this.breadcrumbItems.splice(existingIndex);
  }

  onNodeSelect(event: vm.INodeSelectEvent) {
    this.setFolderSpace(event.node.data);
  }

}