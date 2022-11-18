import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocExplorerRoutingModule } from './doc-explorer-routing.module';
import { DocExplorerComponent } from './doc-explorer.component';
import { ImgUploaderModule } from '../img-uploader/img-uploader.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    DocExplorerComponent
  ],
  imports: [
    CommonModule,
    DocExplorerRoutingModule,
    ImgUploaderModule,
    PanelMenuModule,
    BreadcrumbModule
  ],
  exports: [
    DocExplorerComponent
  ]
})
export class DocExplorerModule { }
