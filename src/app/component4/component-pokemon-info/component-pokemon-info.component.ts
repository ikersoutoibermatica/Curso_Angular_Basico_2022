import { Component, OnInit, Input } from '@angular/core';
import { PokemonInfo } from '../../models/pokemon-info.model';

@Component({
  selector: 'app-component-pokemon-info',
  templateUrl: './component-pokemon-info.component.html',
  styleUrls: ['./component-pokemon-info.component.css'],
})
export class ComponentPokemonInfoComponent implements OnInit {
  @Input() pokeInfo: PokemonInfo = {name: "", height: -1, weight: -1, base_experience: -1, sprites: null};

  constructor() {

  }

  ngOnInit(): void {

  }
}
