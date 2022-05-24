import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TEST DE IKER';
  myName = 'Iker';
  showVisibilityC1 = false;
  showVisibilityC2 = false;
  showVisibilityC3 = false;
  showVisibilityC4 = false;

  ngOnInit() {
    this.componentVisibility(4);
  }

  onSayHello(msg: string) {
    alert(msg);
  }

  componentVisibility(type: number) {
    switch(type) {
      case 0: {
        this.showVisibilityC1 = false;
        this.showVisibilityC2 = false;
        this.showVisibilityC3 = false;
        this.showVisibilityC4 = false;
        break;
      }
      case 1: {
        this.showVisibilityC1 = true;
        this.showVisibilityC2 = false;
        this.showVisibilityC3 = false;
        this.showVisibilityC4 = false;
        break;
      }
      case 2: {
        this.showVisibilityC1 = false;
        this.showVisibilityC2 = true;
        this.showVisibilityC3 = false;
        this.showVisibilityC4 = false;
        break;
      }
      case 3: {
        this.showVisibilityC1 = false;
        this.showVisibilityC2 = false;
        this.showVisibilityC3 = true;
        this.showVisibilityC4 = false;
        break;
      }
      case 4: {
        this.showVisibilityC1 = false;
        this.showVisibilityC2 = false;
        this.showVisibilityC3 = false;
        this.showVisibilityC4 = true;
        break;
      }
      case 99: {
        this.showVisibilityC1 = true;
        this.showVisibilityC2 = true;
        this.showVisibilityC3 = true;
        this.showVisibilityC4 = true;
        break;
      }
      default: {}
    }
  }




}
