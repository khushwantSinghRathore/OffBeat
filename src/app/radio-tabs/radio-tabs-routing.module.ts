import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioTabsPage } from './radio-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: RadioTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioTabsPageRoutingModule {}
