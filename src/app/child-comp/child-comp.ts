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
}
