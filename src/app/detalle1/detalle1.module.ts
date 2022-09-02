import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detalle1PageRoutingModule } from './detalle1-routing.module';

import { Detalle1Page } from './detalle1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detalle1PageRoutingModule
  ],
  declarations: [Detalle1Page]
})
export class Detalle1PageModule {}
