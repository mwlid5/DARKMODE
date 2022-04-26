import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvertidaPageRoutingModule } from './invertida-routing.module';

import { InvertidaPage } from './invertida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvertidaPageRoutingModule
  ],
  declarations: [InvertidaPage]
})
export class InvertidaPageModule {}
