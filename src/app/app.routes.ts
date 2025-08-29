import { Routes } from '@angular/router';
import { reactRoute } from '@rectangular/angular';

const reactRoutes: Routes = [
  reactRoute({
    path: 'counter-async',
    loadComponent: import('src/react/Counter.jsx').then((m) => m.default),
  }),
  
  reactRoute({
    path: '404/:hello/:world',
    loadComponent: import('src/react/404.jsx').then((m) => m.NotFound),
  }),
];

export const routes: Routes = [...reactRoutes];
