import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonInfo } from 'src/app/models/pokemon-info.model';
import { ApiService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  pokeName: string = '';
  pokemonInfo: PokemonInfo = {
    name: '',
    height: -1,
    weight: -1,
    base_experience: -1,
    sprites: null,
  };

  constructor(private apiService: ApiService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((data) => {
      this.pokeName = data['name'];
      this.getPokemonInfo(data['url']);
    });
  }

  getPokemonInfo(url?: string) {
    if (url != null) {
      this.apiService.getPokemonInfo(url).subscribe({
        next: (receivedObj) => {
          this.pokemonInfo = receivedObj;
          this.pokemonInfo.sprites = receivedObj.sprites['front_default'];
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
}
