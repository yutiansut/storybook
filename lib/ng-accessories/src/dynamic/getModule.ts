import { Type, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { STORY } from '../app.token';
import { NgModuleMetadata, NgProvidedData } from '../types';

export interface IModule extends Type<any> {
  annotations: any[];
}

export const getModule = (
  declarations: Array<Type<any> | any[]>,
  entryComponents: Array<Type<any> | any[]>,
  bootstrap: Array<Type<any> | any[]>,
  data: NgProvidedData,
  moduleMetadata: NgModuleMetadata = {
    imports: [],
    schemas: [],
    declarations: [],
    providers: [],
  }
): IModule => {
  const moduleMeta = new NgModule({
    declarations: [...declarations, ...moduleMetadata.declarations],
    imports: [BrowserModule, FormsModule, ...moduleMetadata.imports],
    providers: [{ provide: STORY, useValue: Object.assign({}, data) }, ...moduleMetadata.providers],
    entryComponents: [...entryComponents],
    schemas: [...moduleMetadata.schemas],
    bootstrap: [...bootstrap],
  });

  const NewModule: any = function() {};
  (<IModule>NewModule).annotations = [moduleMeta];
  return NewModule;
};
