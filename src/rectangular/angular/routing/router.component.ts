import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  input,
} from '@angular/core';
import { Route } from '@angular/router';
import { ReactComponent } from '../components/react.component';

export interface ReactRouteSync {
  path: string;
  component: React.FunctionComponent<any>;
}

export interface ReactRouteAsync {
  path: string;
  loadComponent: Promise<React.FunctionComponent<any>>;
}

export type ReactRoute = ReactRouteSync | ReactRouteAsync;

export function reactRoute(routeOptions: ReactRoute): Route {
  if (isReactRouteSync(routeOptions)) {
    return {
      path: routeOptions.path,
      component: ReactRouteElement,
      providers: [
        {
          provide: REACT_ROUTE_COMPONENT_SYNC,
          useValue: routeOptions.component,
        },
      ],
    };
  } else if (isReactRouteAsync(routeOptions)) {
    return {
      path: routeOptions.path,
      component: ReactRouteElement,
      providers: [
        {
          provide: REACT_ROUTE_COMPONENT_ASYNC,
          useValue: routeOptions.loadComponent,
        },
      ],
    };
  }

  throw new Error('Invalid route options');
}

function isReactRouteAsync(
  routeOptions: ReactRoute
): routeOptions is ReactRouteAsync {
  return 'loadComponent' in routeOptions;
}

function isReactRouteSync(
  routeOptions: ReactRoute
): routeOptions is ReactRouteSync {
  return 'component' in routeOptions;
}

export const REACT_ROUTE_COMPONENT_SYNC = new InjectionToken<
  React.FunctionComponent<any>
>('REACT_ROUTE_COMPONENT_SYNC');

export const REACT_ROUTE_COMPONENT_ASYNC = new InjectionToken<
  Promise<React.FunctionComponent<any>>
>('REACT_ROUTE_COMPONENT_ASYNC');

@Component({
  selector: 'react-route-element',
  standalone: true,
  imports: [ReactComponent],
  template: `<react [component]="component"></react>`,
})
export class ReactRouteElement {
  readonly componentSync = inject(REACT_ROUTE_COMPONENT_SYNC, {
    optional: true,
  });
  readonly componentAsync = inject(REACT_ROUTE_COMPONENT_ASYNC, {
    optional: true,
  });

  component!: React.FunctionComponent<any>;

  constructor() {
    if (this.componentSync) {
      this.component = this.componentSync;
    }

    if (this.componentAsync) {
      (async () => {
        this.component = (await this.componentAsync)!;
      })();
    }
  }
}
