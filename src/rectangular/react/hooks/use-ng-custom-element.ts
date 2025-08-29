import { createCustomElement } from '@angular/elements';
import { useNgInject } from './use-ng-inject';
import { Injector, Type } from '@angular/core';
import { assertInNgContext } from '../utils/assert-in-ng-context';
import React, { useEffect } from 'react';

export function useNgCustomElement(selector: string, component: Type<any>) {
  assertInNgContext();
  const injector = useNgInject(Injector);

  useEffect(() => {
    if (customElements.get(selector)) {
      return;
    }
    
    const customElement = createCustomElement(component, { injector });
    customElements.define(selector, customElement);
  }, [selector, component]);

  return React.createElement(selector, null);
}
