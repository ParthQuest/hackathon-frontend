import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocExplorerService } from './doc-explorer.service';

@Component({
  selector: 'app-doc-explorer',
  templateUrl: './doc-explorer.component.html',
  styleUrls: ['./doc-explorer.component.scss']
})
export class DocExplorerComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'File',
      icon: 'pi pi-pw pi-file',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          { label: 'User', icon: 'pi pi-fw pi-user-plus' },
          { label: 'Filter', icon: 'pi pi-fw pi-filter' }
        ]
      },
      { label: 'Open', icon: 'pi pi-fw pi-external-link' },
      { separator: true },
      { label: 'Quit', icon: 'pi pi-fw pi-times' }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      ]
    },
    {
      label: 'Help',
      icon: 'pi pi-fw pi-question',
      items: [
        {
          label: 'Contents',
          icon: 'pi pi-pi pi-bars'
        },
        {
          label: 'Search',
          icon: 'pi pi-pi pi-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'User',
              icon: 'pi pi-fw pi-file',
            }
          ]
        }
      ]
    },
    {
      label: 'Actions',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ]
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [
            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
          ]
        }
      ]
    }
  ];

  breadcrumbItems: MenuItem[] = [
    { label: 'Categories' },
    { label: 'Sports' },
    { label: 'Football' },
    { label: 'Countries' },
    { label: 'Spain' },
    { label: 'F.C. Barcelona' },
    { label: 'Squad' },
    { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
  ];

  constructor(private docService: DocExplorerService) { }

  ngOnInit(): void {
    this.docService.getFolderData();
  }

}
