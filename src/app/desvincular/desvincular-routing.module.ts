import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesvincularPage } from './desvincular.page';

const routes: Routes = [
  {
    path: '',
    component: DesvincularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesvincularPageRoutingModule {}
