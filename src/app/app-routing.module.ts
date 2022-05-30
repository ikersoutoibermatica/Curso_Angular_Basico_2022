import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'componente1',
    loadChildren: () =>
      import('./pages/componente1/componente1.module').then(
        (m) => m.Componente1Module
      ),
  },
  {
    path: 'componente2',
    loadChildren: () =>
      import('./pages/componente2/componente2.module').then(
        (m) => m.Componente2Module
      ),
  },
  {
    path: 'componente3',
    loadChildren: () =>
      import('./pages/componente3/componente3.module').then(
        (m) => m.Componente3Module
      ),
  },
  {
    path: 'listaPokemon',
    loadChildren: () =>
      import('./pages/lista-pokemon/lista-pokemon.module').then(
        (m) => m.ListaPokemonModule
      ),
  },
  {
    path: 'pokemonInfo',
    loadChildren: () =>
      import('./pages/lista-pokemon/pokemon-info/pokemon-info.module').then(
        (m) => m.PokemonInfoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
