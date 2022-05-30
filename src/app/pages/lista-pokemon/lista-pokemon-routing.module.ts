import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPokemonComponent } from './lista-pokemon.component';

const routes: Routes = [
  { path: '', component: ListaPokemonComponent },
  {
    path: 'pokemonInfo',
    loadChildren: () =>
      import('./pokemon-info/pokemon-info.module').then(
        (m) => m.PokemonInfoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPokemonRoutingModule {}
