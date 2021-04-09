import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooselangPage } from './chooselang.page';

const routes: Routes = [
  {
    path: '',
    component: ChooselangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooselangPageRoutingModule {}
