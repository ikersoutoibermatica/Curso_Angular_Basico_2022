import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Componente3RoutingModule } from './componente3-routing.module';
import { Componente3Component } from './componente3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Componente3Component
  ],
  imports: [
    CommonModule,
    Componente3RoutingModule,
    FormsModule
  ]
})
export class Componente3Module { }
