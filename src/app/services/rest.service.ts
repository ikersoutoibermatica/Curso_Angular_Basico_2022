import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { ApiResult } from '../models/api-result.model';
import { PokemonInfo } from '../models/pokemon-info.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private serviceUrl = 'https://pokeapi.co/api/v2/';
  private listSizeItems = '?limit=100000&offset=0';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: boolean): Observable<ApiResult> {
    var lim = '';
    if (limit) {
      lim = this.listSizeItems;
    }
    let urlDef = this.serviceUrl + 'pokemon' + lim;
    console.log(urlDef);

    let url = this.http.get<ApiResult>(urlDef);
    url.pipe(retry(1), catchError(this.handleError));
    return url;
  }

  getPokemonInfo(url: string): Observable<PokemonInfo> {
    let urlPoke = this.http.get<PokemonInfo>(url);
    urlPoke.pipe(retry(1), catchError(this.handleError));
    return urlPoke;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        'Backend returned code ${error.status}, body was: ',
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
