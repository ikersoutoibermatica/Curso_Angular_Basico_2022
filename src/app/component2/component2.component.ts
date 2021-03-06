import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

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
      for (let i = 0; i < this.namesList.length; i++) {
        this.shownList = this.shownList + '<p>' + this.namesList[i] + '</p>';
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
