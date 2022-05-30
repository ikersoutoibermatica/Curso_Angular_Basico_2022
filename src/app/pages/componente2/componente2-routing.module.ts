import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente2Component } from './componente2.component';

const routes: Routes = [{ path: '', component: Componente2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Componente2RoutingModule { }
