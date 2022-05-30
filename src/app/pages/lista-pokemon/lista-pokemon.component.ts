import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css'],
})
export class ListaPokemonComponent implements OnInit {
  pokemonList: Array<Pokemon> = new Array<Pokemon>();

  constructor(private apiService: ApiService, private route: Router) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {
    //Si le pasamos true saca todos los pokemons
    //Si le pasamos false saca unos pocos
    this.apiService.getPokemonList(false).subscribe({
      next: (receivedObj) => {
        this.pokemonList = receivedObj.results;
        console.log(receivedObj);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        //console.info('complete - finish');
      },
    });
  }

  go2PokemonInfo(pokemon: Pokemon) {
    this.route.navigate(['/pokemonInfo'], {
      queryParams: {
        name: pokemon.name,
        url: pokemon.url,
      },
    });
  }
}
