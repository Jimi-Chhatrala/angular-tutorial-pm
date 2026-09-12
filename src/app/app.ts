import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public cssClass = 'myColor myWriting';
  public condition = false;
  protected readonly title = signal('angular-tutorial-pm');
  myCall() {
    return 'myColor';
  }

  myConditionalCss() {
    if (10 > 15) {
      return 'myColor';
    } else {
      return 'myWriting';
    }
  }

  isActive = false;
  isError = true;
  isDisabled = true;

  myClass = 'active large highlighted';

  classes = {
    active: false,
    error: true,
    disabled: true,
  };

  isSelected = false;
}
