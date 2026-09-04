import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inline3-comp',
  // styleUrl: './inline3-comp.css',
  // templateUrl: './inline3-comp.html',
  template: `<h3>Inline 3 Component</h3>
    <p>Inline3Comp</p>
    <hr />`,
  styles: [
    `
      p {
        color: orange;
        font-size: 35px;
      }
    `,
    `
      h3 {
        color: gray;
      }
      p {
        background-color: aqua;
      }
    `,
  ],
})
export class Inline3Comp {}
