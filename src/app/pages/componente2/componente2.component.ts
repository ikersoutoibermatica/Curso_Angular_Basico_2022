import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  nameInputElement: HTMLInputElement;
  getName: string = '';
  namesList: Array<string> = [];
  shownList: string = '';

  constructor() {
    this.nameInputElement = document.createElement("input");
  }

  ngOnInit() {
    this.nameInputElement = (<HTMLInputElement>(document.getElementById('inputNameC2')))
    this.nameInputElement.focus();
  }

  add2List() {
    if (this.getName != null && this.getName != '' && this.getName != 'null') {
      this.shownList = '';
      this.namesList.push(this.getName);
      for (const element of this.namesList) {
        this.shownList = this.shownList + '<p>' + element + '</p>';
      }
    }
    this.getName = '';
    this.nameInputElement.focus();
  }

  clearList() {
    this.shownList = '';
    this.getName = '';
    this.nameInputElement.focus();
    this.namesList.splice(0, this.namesList.length);
  }

}
