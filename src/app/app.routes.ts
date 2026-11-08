import { Routes } from '@angular/router';
import { HomeComp } from './components/home-comp/home-comp';
import { AboutComp } from './components/about-comp/about-comp';
import { ContactComp } from './components/contact-comp/contact-comp';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComp,
  },
  {
    path: 'about',
    component: AboutComp,
  },
  {
    path: 'contact',
    component: ContactComp,
  },
];
