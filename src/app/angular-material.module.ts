import {NgModule} from '@angular/core';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

export const materialModules = [
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AngularMaterialModule {
}
