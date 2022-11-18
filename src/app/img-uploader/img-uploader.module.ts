import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgUploaderRoutingModule } from './img-uploader-routing.module';
import { ImgUploaderComponent } from './img-uploader.component';
import { UploaderModule } from "angular-uploader";
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
  imports: [
    CommonModule,
    ImgUploaderRoutingModule,
    UploaderModule,
    ButtonModule
  ],
  exports: [
    ImgUploaderComponent
  ]
})
export class ImgUploaderModule { }
