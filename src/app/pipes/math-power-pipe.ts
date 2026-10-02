import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathPower',
})
export class MathPowerPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    const [powerNum] = args;
    return Math.pow(value, powerNum);
  }
}
