import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { domManipulationRoutes } from './dom-manipulation';
import { RouteResource } from './shared';

const homeRoute: RouteResource = {
  title: 'Home',
  path: 'home',
  component: HomeComponent
};

/**
 * Append all other exported routes to the
 * componentRoutes array.
 * This array will be used by app component
 * to display all possible routes.
 */
export const componentRoutes: RouteResource[] = [
  homeRoute,
  ...domManipulationRoutes
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...componentRoutes,
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
