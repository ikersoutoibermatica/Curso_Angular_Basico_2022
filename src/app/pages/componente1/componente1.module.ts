import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Componente1RoutingModule } from './componente1-routing.module';
import { Componente1Component } from './componente1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Componente1Component
  ],
  imports: [
    CommonModule,
    Componente1RoutingModule,
    FormsModule
  ]
})
export class Componente1Module { }
