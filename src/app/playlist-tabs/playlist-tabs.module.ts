import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistTabsPageRoutingModule } from './playlist-tabs-routing.module';

import { PlaylistTabsPage } from './playlist-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistTabsPageRoutingModule
  ],
  declarations: [PlaylistTabsPage]
})
export class PlaylistTabsPageModule {}
