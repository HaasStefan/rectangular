import { useContext } from 'react';
import { InjectorContext } from '../hooks/use-ng-inject';

export function assertInNgContext() {
  const injector = useContext(InjectorContext);
  if (!injector) {
    throw new Error('useNgInject must be used within an InjectorProvider');
  }
}
