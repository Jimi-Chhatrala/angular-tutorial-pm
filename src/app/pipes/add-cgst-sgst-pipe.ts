import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCgstSgst',
})
export class AddCgstSgstPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    const [cgst, sgst] = args;
    return value + (value * cgst) / 100 + (value * sgst) / 100;
  }
}
