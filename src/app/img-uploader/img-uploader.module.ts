import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgUploaderRoutingModule } from './img-uploader-routing.module';
import { ImgUploaderComponent } from './img-uploader.component';
import { UploaderModule } from "angular-uploader";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
  imports: [
    CommonModule,
    ImgUploaderRoutingModule,
    UploaderModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    FormsModule

  ],
  exports: [
    ImgUploaderComponent
  ],
  providers: []
})
export class ImgUploaderModule { }
