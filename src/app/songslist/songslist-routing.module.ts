import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongslistPage } from './songslist.page';

const routes: Routes = [
  {
    path: '',
    component: SongslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongslistPageRoutingModule {}
