import React from "react";
import type { Injector } from "@angular/core";
import { InjectorProvider } from "./InjectorProvider";

interface HostProps {
  component: React.FunctionComponent<any>;
  injector: Injector;
  props?: Record<string, any>;
}

export const Host: React.FC<HostProps> = ({
  component: Component,
  injector,
  props,
}) => {
  return (
    <InjectorProvider injector={injector}>
      <Component {...props} />
    </InjectorProvider>
  );
};

export default Host;
