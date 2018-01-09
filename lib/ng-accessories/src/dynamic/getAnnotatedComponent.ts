import { Type, NgModule, Component } from '@angular/core';

export interface IComponent extends Type<any> {
  annotations: any[];
  parameters: any[];
  propsMetadata: any[];
}

export const getAnnotatedComponent = (
  meta: NgModule,
  component: any,
  propsMeta: { [p: string]: any },
  params: any[]
): IComponent => {
  const NewComponent: any = function(...args: any[]) {
    component.call(this, ...args);
  };

  NewComponent.prototype = Object.create(component.prototype);
  NewComponent.annotations = [new Component(meta)];
  NewComponent.parameters = params;
  NewComponent.propsMetadata = propsMeta;

  return NewComponent;
};
