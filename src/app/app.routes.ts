import { Routes } from '@angular/router';
import { HomeComp } from './components/home-comp/home-comp';
import { AboutComp } from './components/about-comp/about-comp';
import { ContactComp } from './components/contact-comp/contact-comp';
import { PageNotFoundComp } from './components/page-not-found-comp/page-not-found-comp';
import { EmployeesListComp } from './components/employees-list-comp/employees-list-comp';
import { EmployeeDetailsComp } from './components/employee-details-comp/employee-details-comp';
import { ProductsComp } from './components/products-comp/products-comp';
import { TopProductsComp } from './components/top-products-comp/top-products-comp';
import { BottomProductsComp } from './components/bottom-products-comp/bottom-products-comp';
import { TShirtsProductsComp } from './components/tshirts-products-comp/tshirts-products-comp';
import { TrousersProductsComp } from './components/trousers-products-comp/trousers-products-comp';

export const routes: Routes = [
  {
    path: '',
    // component: HomeComp,
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComp,
  },
  {
    path: 'products',
    component: ProductsComp,
    children: [
      {
        path: 'top',
        component: TopProductsComp,
        children: [
          {
            path: 'tshirts',
            component: TShirtsProductsComp,
          },
        ],
      },
      {
        path: 'bottom',
        component: BottomProductsComp,
        children: [
          {
            path: 'trousers',
            component: TrousersProductsComp,
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    component: AboutComp,
  },
  {
    path: 'contact',
    component: ContactComp,
  },
  {
    path: 'employees',
    component: EmployeesListComp,
  },
  {
    path: 'employees/:id',
    // path: 'employees/:id/:name',
    component: EmployeeDetailsComp,
  },
  {
    path: '**',
    component: PageNotFoundComp,
  },
];
