import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTabsPage } from './search-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTabsPageRoutingModule {}
