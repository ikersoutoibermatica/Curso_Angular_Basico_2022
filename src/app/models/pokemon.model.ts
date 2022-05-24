export class Pokemon {
  private name: string;
  private url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getUrl(): string {
    return this.url;
  }

  setUrl(url: string) {
    this.url = url;
  }

  toString(): string {
    return "Name: " + this.name + ", Url: " + this.url;
  }
}
