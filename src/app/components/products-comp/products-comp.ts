import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-products-comp',
  styleUrl: './products-comp.css',
  templateUrl: './products-comp.html',
})
export class ProductsComp {}
