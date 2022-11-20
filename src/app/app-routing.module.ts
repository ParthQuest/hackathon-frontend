import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./doc-explorer/doc-explorer.module").then(m => m.DocExplorerModule)
  }, {
    path: "home",
    redirectTo: '',
    pathMatch: "full"
  },
  {
    path: 'upload',
    loadChildren: () => import("./img-uploader/img-uploader.module").then(m => m.ImgUploaderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
