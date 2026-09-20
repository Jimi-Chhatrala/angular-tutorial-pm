import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-comp',
  styleUrl: './child-comp.css',
  // templateUrl: './child-comp.html',
  template: ` <h2>Child Component</h2>`,
})
export class ChildComp {
  message = 'Hello from Child';

  showMessage() {
    console.log(this.message);
  }
}
