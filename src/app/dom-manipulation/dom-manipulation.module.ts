import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerViewFactoryComponent } from './container-view-factory';
import { AttributeHandlerDirective, DomAttributeHandlerComponent } from './dom-attribute-handler';
import { RouteResource } from '../shared';

@NgModule({
  imports: [CommonModule],
  exports: [ContainerViewFactoryComponent, DomAttributeHandlerComponent],
  declarations: [ContainerViewFactoryComponent, AttributeHandlerDirective, DomAttributeHandlerComponent],
  providers: [],
})
export class DomManipulationModule {
}

export const domManipulationRoutes: RouteResource[] = [
  {
    title: 'Container View Factory',
    path: 'container-view-factory',
    component: ContainerViewFactoryComponent
  },
  {
    title: 'Dom Attribute Handler',
    path: 'dom-attribute-handler',
    component: DomAttributeHandlerComponent
  }
];
