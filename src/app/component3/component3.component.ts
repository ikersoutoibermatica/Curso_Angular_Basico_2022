import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  getName: string = '';
  namesList: Array<string> = [];
  shownList: string = '';

  constructor() {
  }

  ngOnInit() {
    //focus
  }

  add2List(input: HTMLInputElement) {
    if (this.getName != null && this.getName != '' && this.getName != 'null') {
      this.shownList = '';
      this.namesList.push(this.getName);
      for (let i = 0; i < this.namesList.length; i++) {
        this.shownList = this.shownList + '<p>' + this.namesList[i] + '</p>';
      }
    }
    this.getName = '';
    input.focus();
  }

  clearList(input: HTMLInputElement) {
    this.shownList = '';
    this.getName = '';
    input.focus();
    this.namesList.splice(0, this.namesList.length);
  }

}
