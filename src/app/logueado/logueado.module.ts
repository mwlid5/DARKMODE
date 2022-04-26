import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogueadoPageRoutingModule } from './logueado-routing.module';

import { LogueadoPage } from './logueado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogueadoPageRoutingModule
  ],
  declarations: [LogueadoPage]
})
export class LogueadoPageModule {}
