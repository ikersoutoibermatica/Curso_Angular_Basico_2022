import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente3Component } from './componente3.component';

const routes: Routes = [{ path: '', component: Componente3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Componente3RoutingModule { }
