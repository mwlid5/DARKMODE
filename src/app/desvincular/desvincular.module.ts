import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesvincularPageRoutingModule } from './desvincular-routing.module';

import { DesvincularPage } from './desvincular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesvincularPageRoutingModule
  ],
  declarations: [DesvincularPage]
})
export class DesvincularPageModule {}
