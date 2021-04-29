import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioplayPage } from './radioplay.page';

const routes: Routes = [
  {
    path: '',
    component: RadioplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioplayPageRoutingModule {}
