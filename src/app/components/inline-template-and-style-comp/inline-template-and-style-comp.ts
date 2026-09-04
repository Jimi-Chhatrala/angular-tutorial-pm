import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inline-template-and-style-comp',
  styles: `
    p {
      color: red;
    }
    h3 {
      color: red;
    }
  `,
  template: `<h3>InlineTemplateAndStyleComp</h3>
    <p>inline-template-and-style-comp works!</p>
    <hr /> `,
})
export class InlineTemplateAndStyleComp {}
