import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DondeEstamosComponent } from './seccion/donde-estamos/donde-estamos.component';


const routes: Routes = [
  {path: 'seccion/donde_estamos' , component: DondeEstamosComponent },
  {path:'seccion/inicio',  loadChildren: () => import('./seccion/inicio/inicio.module').then(mod => mod.InicioModule)},
  {path: 'seccion/quienes-somos', loadChildren: ()=> import('./seccion/conocenos/quienes-somos/quienes-somos.module').then(mod=> mod.QuienesSomosModule)},
  {path: 'seccion/nuestra-historia', loadChildren: ()=> import('./seccion/conocenos/nuestra-historia/nuestra-historia.module').then(mod=> mod.NuestraHistoriaModule)},
  {path: 'seccion/mision-vision', loadChildren: ()=> import('./seccion/conocenos/mision-vision/mision-vision.module').then(mod=> mod.MisionVisionModule)},
  {path: 'seccion/conocenos', loadChildren: ()=> import('./seccion/conocenos/conocenos/conocenos.module').then(mod=> mod.ConocenosModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
