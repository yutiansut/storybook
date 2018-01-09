// We could use NgComponentOutlet here but there's currently no easy way
// to provide @Inputs and subscribe to @Outputs, see
// https://github.com/angular/angular/issues/15360
// For the time being, the ViewContainerRef approach works pretty well.
import {
  Component,
  Inject,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from '@angular/core';
import { STORY } from '@storybook/ng-accessories/dist/app.token';
import { NgStory } from '@storybook/ng-accessories/dist/types';
import { setProps } from '@storybook/ng-accessories/dist/props_injection';

@Component({
  selector: 'storybook-dynamic-app-root',
  template: '<ng-template #target></ng-template>',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('target', { read: ViewContainerRef })
  target: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver, @Inject(STORY) private data: NgStory) {}

  ngAfterViewInit(): void {
    this.putInMyHtml();
  }

  ngOnDestroy(): void {
    this.target.clear();
  }

  private putInMyHtml(): void {
    this.target.clear();
    const compFactory = this.cfr.resolveComponentFactory(this.data.component);
    const instance = this.target.createComponent(compFactory).instance;

    setProps(instance, this.data);
  }
}
