import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',
})
export class GreetPipe implements PipeTransform {
  transform(name: string, greeting: string): string {
    return `${greeting}, ${name}!`;
  }
}
