import { Routes } from '@angular/router';
import { reactRoute } from '@rectangular/angular';
import Counter from 'src/react/Counter';

const reactRoutes: Routes = [
  reactRoute({
    path: 'counter',
    component: Counter,
  }),
  reactRoute({
    path: 'counter-async',
    loadComponent: import('src/react/Counter.jsx').then((m) => m.default),
  }),
];

export const routes: Routes = [
  ...reactRoutes
];

