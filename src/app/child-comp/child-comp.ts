import { Component, input, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-comp',
  styleUrl: './child-comp.css',
  templateUrl: './child-comp.html',
})
export class ChildComp {
  @Input('name') name: string = '';
  @Input('fruits') fruits: string[] = [];
  @Input('userData') userData: any = {};
  @Input() age: number | string = 0;
  @Input() admin = false;
  @Input() user!: {
    name: string;
    age: number;
    city: string;
  };
  framework = input('');
}
