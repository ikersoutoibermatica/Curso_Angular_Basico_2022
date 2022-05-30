import { Component } from '@angular/core';
import { NavigationMenu } from './models/navigation-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TEST DE IKER';
  myName = 'Iker';
  navMenuList: Array<NavigationMenu> = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Componente 1',
      path: 'componente1',
    },
    {
      name: 'Componente 2',
      path: 'componente2',
    },
    {
      name: 'Componente 3',
      path: 'componente3',
    },
    {
      name: 'Lista Pokemon',
      path: 'listaPokemon',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onSayHello(msg: string) {
    alert(msg);
  }
}
