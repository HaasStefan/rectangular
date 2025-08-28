import React from 'react';
import type { Injector } from '@angular/core';
import { InjectorContext } from '../hooks/use-ng-inject';

interface InjectorProviderProps {
  injector: Injector;
  children: React.ReactNode;
}

export const InjectorProvider: React.FC<InjectorProviderProps> = ({ injector, children }) => {
  return (
    <InjectorContext.Provider value={injector}>
      {children}
    </InjectorContext.Provider>
  );
};

export default InjectorProvider;
