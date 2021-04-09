import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevinfoPage } from './devinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DevinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevinfoPageRoutingModule {}
