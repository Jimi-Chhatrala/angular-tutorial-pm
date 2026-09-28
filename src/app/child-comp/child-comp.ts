import { Component, Input } from '@angular/core';

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
}
