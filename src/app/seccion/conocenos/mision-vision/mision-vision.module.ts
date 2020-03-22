import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionVisionRoutingModule } from './mision-vision-routing.module';
import { MisionVisionComponent } from './mision-vision.component';


@NgModule({
  declarations: [MisionVisionComponent],
  imports: [
    CommonModule,
    MisionVisionRoutingModule
  ]
})
export class MisionVisionModule { }
