import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuestraHistoriaRoutingModule } from './nuestra-historia-routing.module';
import { NuestraHistoriaComponent } from './nuestra-historia.component';


@NgModule({
  declarations: [NuestraHistoriaComponent],
  imports: [
    CommonModule,
    NuestraHistoriaRoutingModule
  ]
})
export class NuestraHistoriaModule { }
