import { Routes } from '@angular/router';
import { reactRoute } from '@rectangular/angular';

const reactRoutes: Routes = [
  reactRoute({
    path: 'counter',
    loadComponent: import('src/react/Counter.jsx').then((m) => m.default),
  }), 
  reactRoute({
    path: '404',
    loadComponent: import('src/react/404.jsx').then((m) => m.NotFound),
  }),
  {
    path: '**',
    redirectTo: '404',
  }
];

export const routes: Routes = [...reactRoutes];
