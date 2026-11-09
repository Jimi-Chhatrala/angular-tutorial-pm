import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-top-products-comp',
  styleUrl: './top-products-comp.css',
  templateUrl: './top-products-comp.html',
})
export class TopProductsComp {}
