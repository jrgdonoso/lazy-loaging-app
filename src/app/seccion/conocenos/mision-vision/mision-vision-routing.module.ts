import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisionVisionModule } from './mision-vision.module';
import { MisionVisionComponent } from './mision-vision.component';


const routes: Routes = [{path:"",component:MisionVisionComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisionVisionRoutingModule { }
