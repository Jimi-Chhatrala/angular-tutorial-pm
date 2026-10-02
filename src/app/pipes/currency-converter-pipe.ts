import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: string[]): number {
    const [from, to] = args;
    if (from == 'USD' && to == 'INR') {
      return value * 96.15;
    }
    return 0;
  }
}
