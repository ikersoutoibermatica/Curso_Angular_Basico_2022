import { Pokemon } from './pokemon.model';

export class ApiResult {
  private count: number;
  private next: any;
  private previus: any;
  private results: Array<Pokemon>;

  constructor(count: number, next: any, previus: any, results: Array<Pokemon>) {
    this.count = count;
    this.next = next;
    this.previus = previus;
    this.results = results;
  }

  getCount(): number {
    return this.count;
  }

  setCount(count: number) {
    this.count = count;
  }

  getNext(): any {
    return this.next;
  }

  setNext(next: any) {
    this.next = next;
  }

  getPrevius(): any {
    return this.previus;
  }

  setPrevius(previus: any) {
    this.previus = previus;
  }

  getResults(): Array<Pokemon> {
    return this.results;
  }

  setResults(results: Array<Pokemon>) {
    this.results = results;
  }

  toString(): string {
    return (
      'Count: ' +
      this.count.toString +
      ', Next: ' +
      this.next.toString +
      ', Previus: ' +
      this.previus.toString +
      ', PokemonArray: ' +
      this.results.toString +
      '.'
    );
  }
}
