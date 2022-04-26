import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesetPageRoutingModule } from './detalleset-routing.module';

import { DetallesetPage } from './detalleset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesetPageRoutingModule
  ],
  declarations: [DetallesetPage]
})
export class DetallesetPageModule {}
