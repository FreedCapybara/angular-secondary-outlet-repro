import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryContent1Component } from "./primary-content-1/primary-content-1.component";
import { PrimaryContent2Component } from "./primary-content-2/primary-content-2.component";
import { SecondaryContentComponent } from "./secondary-content/secondary-content.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'primary1',
  pathMatch: 'full'
}, {
  path: 'primary1',
  component: PrimaryContent1Component
}, {
  path: 'primary2',
  component: PrimaryContent2Component
}, {
  path: 'secondary',
  outlet: 'secondary',
  component: SecondaryContentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
