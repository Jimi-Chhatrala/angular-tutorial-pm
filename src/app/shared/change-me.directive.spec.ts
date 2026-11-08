import { ElementRef } from '@angular/core';
import { ChangeMeDirective } from './change-me.directive';

describe('ChangeMeDirective', () => {
  it('should set the host element text color to red', () => {
    const element = document.createElement('div');
    const directive = new ChangeMeDirective(new ElementRef(element));

    expect(directive).toBeTruthy();
    expect(element.style.color).toBe('red');
  });
});
