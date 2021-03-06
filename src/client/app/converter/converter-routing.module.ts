import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConverterComponent } from './converter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ConverterComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ConverterRoutingModule { }
