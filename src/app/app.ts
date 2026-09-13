import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  public condition = true;
  public cssClass = 'myColor myWriting';
  public cssArray = ['myColor', 'myWriting'];
  public myNewClass = new myClass();
}

class myClass {
  myColor = true;
  myWriting = false;
}
