import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
  NgFor,
} from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReversePipe } from './pipes/reverse-pipe';
import { GreetPipe } from './pipes/greet-pipe';
import { MathPowerPipe } from './pipes/math-power-pipe';
import { AddCgstSgstPipe } from './pipes/add-cgst-sgst-pipe';
import { CurrencyConverterPipe } from './pipes/currency-converter-pipe';

@Component({
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe,
    DatePipe,
    NgFor,
    ReversePipe,
    GreetPipe,
    MathPowerPipe,
    AddCgstSgstPipe,
    CurrencyConverterPipe,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');
  lowerCaseString = 'Learning Angular';
  upperCaseString = 'PIPES IN ANGULAR';
  personData = {
    id: 1,
    name: 'Abc',
    age: 25,
    height: 5.1,
  };
  price = 1234567.89;
  price_1 = 1234.501;
  price_2 = 1234.5;
  price_3 = 1500;
  progress = 0.75;
  today = new Date();
  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  word = 'hello world';
  users = [
    { name: 'john', age: 25 },
    { name: 'alice', age: 30 },
  ];

  formatStringToUpperCase(string: string) {
    return string.toUpperCase();
  }
}
