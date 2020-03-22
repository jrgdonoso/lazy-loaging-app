import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocenosComponent } from './conocenos.component';
import { NuestraHistoriaComponent } from '../nuestra-historia/nuestra-historia.component';


const routes: Routes = [
{ path:'', component: ConocenosComponent},
{path:'nuestra-historia',  loadChildren: () => import('../nuestra-historia/nuestra-historia.module').then(mod => mod.NuestraHistoriaModule)},
{path:'quienes-somos',  loadChildren: () => import('../quienes-somos/quienes-somos.module').then(mod => mod.QuienesSomosModule)},
{path:'mision-vision',  loadChildren: () => import('../mision-vision/mision-vision.module').then(mod => mod.MisionVisionModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConocenosRoutingModule { }
