import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { ConverterRoutingModule } from './converter-routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, ConverterRoutingModule, SharedModule],
  declarations: [ConverterComponent],
  exports: [ConverterComponent]
})
export class ConverterModule { }
