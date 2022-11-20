import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocExplorerRoutingModule } from './doc-explorer-routing.module';
import { DocExplorerComponent } from './doc-explorer.component';
import { ImgUploaderModule } from '../img-uploader/img-uploader.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    DocExplorerComponent
  ],
  imports: [
    CommonModule,
    DocExplorerRoutingModule,
    ImgUploaderModule,
    BreadcrumbModule,
    FormsModule,
    InputTextModule,
    TreeModule
  ],
  exports: [
    DocExplorerComponent
  ]
})
export class DocExplorerModule { }
