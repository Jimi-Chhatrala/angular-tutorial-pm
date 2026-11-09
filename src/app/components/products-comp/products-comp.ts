import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-products-comp',
  styleUrl: './products-comp.css',
  templateUrl: './products-comp.html',
})
export class ProductsComp {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  showTopProducts() {
    this.router.navigate(['top'], { relativeTo: this.activatedRoute });
  }

  showBottomProducts() {
    this.router.navigate(['bottom'], { relativeTo: this.activatedRoute });
  }
}
