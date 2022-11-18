import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocExplorerComponent } from './doc-explorer.component';

const routes: Routes = [
  {
    path: '',
    component: DocExplorerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocExplorerRoutingModule { }
