import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inline1-comp',
  // styleUrl: './inline1-comp.css',
  templateUrl: './inline1-comp.html',
  styles: [
    `
      p {
        color: blue;
        font-size: 25px;
      }
    `,
  ],
})
export class Inline1Comp {}
