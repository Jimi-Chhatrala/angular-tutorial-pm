import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-event-handling-comp',
  styleUrl: './event-handling-comp.css',
  templateUrl: './event-handling-comp.html',
})
export class EventHandlingComp {
  name = '';
  onClickEvent(param: string, number: number) {
    alert('Hello from Angular');
    this.name = 'Angular On Click Event';
    confirm(`Are you learning ${param} ${number} ?`);
  }

  onClickEventObj(event: any) {
    alert(`Event type: ${event.type}`);
  }

  onMouseOverEvent() {
    alert('On Mouse Over Event Called');
  }

  onMouseOutEvent() {
    alert('onMouseOutEvent called.');
  }

  onMouseLeaveEvent() {
    alert('onMouseLeaveEvent');
  }

  count = 0;

  add(a: number, b: number) {
    alert(a + b);
  }

  inputValue = '';
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
  }

  onKeyDown(event: Event) {
    alert(event.type);
  }

  onEnterKeyDown() {
    alert('onEnterKeyDown');
  }

  onEscapeKeyDown() {
    alert('onEscapeKeyDown');
  }

  onMouseDownUpMoveEvent(event: Event) {
    alert(event.type);
  }

  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    alert(`You selected: ${select.value}`);
  }

  onFormSubmit() {
    alert('Form Submitted.');
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  username = 'John';

  changeUserName() {
    this.username = 'David';
  }

  onMouseLeaveParentChild(event: Event) {
    alert(event.type);
  }
  onMouseOutParentChild(event: Event) {
    alert(event.type);
  }
}
