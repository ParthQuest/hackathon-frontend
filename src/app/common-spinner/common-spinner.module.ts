import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'primeng/blockui';
import { CommonSpinnerComponent } from './common-spinner.component';

@NgModule({
  declarations: [
    CommonSpinnerComponent
  ],
  imports: [
    CommonModule,
    BlockUIModule
  ],
  exports: [
    CommonSpinnerComponent
  ]
})
export class CommonSpinnerModule { }
