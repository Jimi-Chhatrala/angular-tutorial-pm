import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-comp',
  styleUrl: './child-comp.css',
  templateUrl: './child-comp.html',
})
export class ChildComp {
  @Output() childEvent = new EventEmitter();
  sendDataToParent() {
    this.childEvent.emit('Passing data from child to parent component.');
  }

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit('Hello Parent!');
  }

  @Output() countEvent = new EventEmitter<number>();
  increaseCount() {
    this.countEvent.emit(10);
  }

  user = {
    name: 'John',
    age: 25,
  };
  @Output() userEvent = new EventEmitter<{ name: string; age: number }>();
  sendUser() {
    this.userEvent.emit(this.user);
  }
}
