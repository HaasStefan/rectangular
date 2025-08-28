import { inject, InjectionToken, Injector, ProviderToken } from "@angular/core";
import React from 'react';

export const InjectorContext = React.createContext<Injector | null>(null);

export function useNgInject<T>(token: ProviderToken<T>): T {
  const injector = React.useContext(InjectorContext);
  if (!injector) {
    throw new Error("useNgInject must be used within an InjectorProvider");
  }
  return injector.get(token);
}

