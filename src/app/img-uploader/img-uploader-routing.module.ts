import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgUploaderComponent } from './img-uploader.component';

const routes: Routes = [
  {
    path: '',
    component: ImgUploaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgUploaderRoutingModule { }
