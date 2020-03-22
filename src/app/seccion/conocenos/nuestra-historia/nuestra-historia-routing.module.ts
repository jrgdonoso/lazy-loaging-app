import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuestraHistoriaModule } from './nuestra-historia.module';
import { NuestraHistoriaComponent } from './nuestra-historia.component';


const routes: Routes = [{path:"",component:NuestraHistoriaComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuestraHistoriaRoutingModule { }
