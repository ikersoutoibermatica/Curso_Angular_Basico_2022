import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/rest.service';
import { ApiResult } from '../models/api-result.model';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component implements OnInit {
  apiResult: ApiResult = new ApiResult(-1, null, null, new Array<Pokemon>());

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {
    this.apiService.getPokemonList(true).subscribe({
      next: (receivedObj) => {
        this.apiResult = receivedObj;
        console.log(receivedObj);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('complete - finish');
      },
    });
  }
}
