import { Type } from "@angular/core";
import { useNgCustomElement } from "../hooks/use-ng-custom-element";
import React from "react";

interface AngularProps {
  selector: string;
  component: Type<any>;
}

export function AngularHost({ selector, component }: AngularProps) {
  const customElement = useNgCustomElement(selector, component);

  return customElement;
}
