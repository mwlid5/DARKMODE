import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiarticuloPageRoutingModule } from './multiarticulo-routing.module';

import { MultiarticuloPage } from './multiarticulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiarticuloPageRoutingModule
  ],
  declarations: [MultiarticuloPage]
})
export class MultiarticuloPageModule {}
