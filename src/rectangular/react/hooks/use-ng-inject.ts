import { Injector, ProviderToken } from '@angular/core';
import React from 'react';
import { assertInNgContext } from '../utils/assert-in-ng-context';

export const InjectorContext = React.createContext<Injector | null>(null);

export function useNgInject<T>(token: ProviderToken<T>): T {
  assertInNgContext();

  return React.useContext(InjectorContext)!.get(token);
}
