import {
  effect,
  inject,
  Injector,
  NgZone,
  runInInjectionContext,
  WritableSignal,
} from '@angular/core';
import { useNgInject } from './use-ng-inject';
import { useEffect, useState } from 'react';

export function useNgSignal<T>(
  signal: WritableSignal<T>
): [T, (value: T) => void] {
  const ngZone = useNgInject(NgZone);
  const injector = useNgInject(Injector);

  const [value, setValue] = useState(signal());

  const setSignal = (value: T) => {
    ngZone.run(() => {
      signal.set(value);
    });
  };

  runInInjectionContext(injector, () => {
    effect(() => {
      if (value !== signal()) setValue(signal());
    });
  });

  useEffect(() => {}, [signal]);

  return [signal(), setSignal];
}
