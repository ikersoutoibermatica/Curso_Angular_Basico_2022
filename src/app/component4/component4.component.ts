import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/rest.service';
import { ApiResult } from '../models/api-result.model';
import { Pokemon } from '../models/pokemon.model';
import { PokemonInfo } from '../models/pokemon-info.model';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component implements OnInit {
  pokemonList: Array<Pokemon> = new Array<Pokemon>();
  pokemonInfo: PokemonInfo = {
    name: '',
    height: -1,
    weight: -1,
    base_experience: -1,
    sprites: null,
  };
  showPokeInfo: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.showPokeInfo = false;
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

  getPokemonInfo(url: string) {
    this.showPokeInfo = false;
    this.apiService.getPokemonInfo(url).subscribe({
      next: (receivedObj) => {
        this.pokemonInfo = receivedObj;
        this.pokemonInfo.sprites = receivedObj.sprites['front_default'];
        this.showPokeInfo = true;
        console.log(receivedObj);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        //console.info('complete - finish');
        //getIcon2 = (param: string) => `Hola mundo ${param}`;
      },
    });
  }
}
