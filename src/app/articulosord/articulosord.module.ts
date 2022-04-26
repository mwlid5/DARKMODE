import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticulosordPageRoutingModule } from './articulosord-routing.module';

import { ArticulosordPage } from './articulosord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticulosordPageRoutingModule
  ],
  declarations: [ArticulosordPage]
})
export class ArticulosordPageModule {}
