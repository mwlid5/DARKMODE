import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiarticuloPage } from './multiarticulo.page';

const routes: Routes = [
  {
    path: '',
    component: MultiarticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiarticuloPageRoutingModule {}
