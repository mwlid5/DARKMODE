import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticulosordPage } from './articulosord.page';

const routes: Routes = [
  {
    path: '',
    component: ArticulosordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticulosordPageRoutingModule {}
