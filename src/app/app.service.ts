import { Injectable } from '@angular/core';
import { componentRoutes } from './app-routing.module';

export interface NavbarLink {
  name: string,
  route: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  public getNavLinks(): NavbarLink[] {
    return componentRoutes
      .filter(r => !!r.title)
      .map(r => ({name: r.title, route: `/${r.path}`}));
  }
}
