import { Pokemon } from './pokemon.model';

export interface ApiResult {
  count: number;
  next: any;
  previus: any;
  results: Array<Pokemon>;
}
