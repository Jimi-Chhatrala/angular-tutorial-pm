import { Component, signal } from '@angular/core';
import { Inline1Comp } from './components/inline1-comp/inline1-comp';
import { Inline2Comp } from './components/inline2-comp/inline2-comp';
import { Inline3Comp } from './components/inline3-comp/inline3-comp';
import { InlineStyleComp } from './components/inline-style-comp/inline-style-comp';
import { InlineTemplateComp } from './components/inline-template-comp/inline-template-comp';
import { InlineTemplateAndStyleComp } from './components/inline-template-and-style-comp/inline-template-and-style-comp';
// import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Inline1Comp, Inline2Comp, Inline3Comp, InlineStyleComp, InlineTemplateComp, InlineTemplateAndStyleComp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
}
