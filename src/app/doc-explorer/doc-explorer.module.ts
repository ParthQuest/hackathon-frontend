import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocExplorerRoutingModule } from './doc-explorer-routing.module';
import { DocExplorerComponent } from './doc-explorer.component';
import { ImgUploaderModule } from '../img-uploader/img-uploader.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    DocExplorerComponent
  ],
  imports: [
    CommonModule,
    DocExplorerRoutingModule,
    ImgUploaderModule,
    PanelMenuModule,
    BreadcrumbModule,
    FormsModule,
    InputTextModule
  ],
  exports: [
    DocExplorerComponent
  ]
})
export class DocExplorerModule { }
