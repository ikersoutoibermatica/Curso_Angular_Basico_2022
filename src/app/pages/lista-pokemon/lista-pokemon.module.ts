import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPokemonRoutingModule } from './lista-pokemon-routing.module';
import { ListaPokemonComponent } from './lista-pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonInfoModule } from './pokemon-info/pokemon-info.module';


@NgModule({
  declarations: [
    ListaPokemonComponent
  ],
  imports: [
    CommonModule,
    ListaPokemonRoutingModule,
    FormsModule,
    PokemonInfoModule
  ]
})
export class ListaPokemonModule { }
