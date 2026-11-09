import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-bottom-products-comp',
  styleUrl: './bottom-products-comp.css',
  templateUrl: './bottom-products-comp.html',
})
export class BottomProductsComp {}
