import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesetPage } from './detalleset.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesetPageRoutingModule {}
