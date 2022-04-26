import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvertidaPage } from './invertida.page';

const routes: Routes = [
  {
    path: '',
    component: InvertidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvertidaPageRoutingModule {}
