import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistTabsPage } from './playlist-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistTabsPageRoutingModule {}
