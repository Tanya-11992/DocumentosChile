import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detalle1Page } from './detalle1.page';

const routes: Routes = [
  {
    path: '',
    component: Detalle1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detalle1PageRoutingModule {}
