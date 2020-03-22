import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConocenosRoutingModule } from './conocenos-routing.module';
import { ConocenosComponent } from './conocenos.component';


@NgModule({
  declarations: [ConocenosComponent],
  imports: [
    CommonModule,
    ConocenosRoutingModule
  ]
})
export class ConocenosModule { }
