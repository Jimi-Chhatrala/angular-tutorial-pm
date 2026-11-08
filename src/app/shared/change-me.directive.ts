import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeMeDirective]',
})
export class ChangeMeDirective {
  @Input() myColor = '';
  @Input() myBgColor = '';

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.innerHTML = 'Hello Universe';
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.color = this.myColor;
    this.elementRef.nativeElement.style.backgroundColor = this.myBgColor;
  }
}
