import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [NgStyle],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  myClasses = {
    color: 'orange',
    fontFamily: 'cooper',
    'font-size': '45px',
  };
  condition = false;
  textColorRed = 'red';

  textColor = 'blue';
  bgColor = 'yellow';
  fontSize = '20px';

  isError = true;
  isDisabled = true;

  defaultFontSize = 20;

  increaseFont() {
    this.defaultFontSize += 2;
  }
  width = 200;

  status = 'success';

  getStyles() {
    return {
      color: this.status === 'success' ? 'green' : 'red',
      'font-size': '20px',
      padding: '10px',
      'background-color': this.status === 'success' ? 'lightgreen' : 'pink',
    };
  }
}
