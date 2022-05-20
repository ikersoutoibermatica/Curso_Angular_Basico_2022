import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEST DE IKER';
  myName = 'Iker';

  onSayHello(msg: string) {
    alert(msg);
  }
}
