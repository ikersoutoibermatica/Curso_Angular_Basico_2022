import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input() name: string = '';
  @Output() sayHello: EventEmitter<string> = new EventEmitter();

  nameInputElement: HTMLInputElement;
  namesList: Array<string> = [];
  shownList: string = '';

  constructor() {
    this.nameInputElement = document.createElement("input");
  }

  ngOnInit() {
    this.nameInputElement = (<HTMLInputElement>(document.getElementById('inputName')))
    this.nameInputElement.focus();
  }

  onNameClick() {
    this.sayHello.emit('Hola');
  }

  add2List() {
    var newName: string = this.nameInputElement.value.trim();
    if (newName != null && newName != '' && newName != 'null') {
      this.shownList = '';
      this.namesList.push(newName);
      for (let i = 0; i < this.namesList.length; i++) {
        this.shownList = this.shownList + '<p>' + this.namesList[i] + '</p>';
      }
    }
    this.nameInputElement.value = '';
    this.nameInputElement.focus();
  }

  clearList() {
    this.shownList = '';
    this.nameInputElement.value = '';
    this.nameInputElement.focus();
    this.namesList.splice(0, this.namesList.length);
  }
}
