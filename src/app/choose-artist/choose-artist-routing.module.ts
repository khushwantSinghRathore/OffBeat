import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseArtistPage } from './choose-artist.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseArtistPageRoutingModule {}
