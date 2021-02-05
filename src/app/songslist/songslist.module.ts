import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongslistPageRoutingModule } from './songslist-routing.module';

import { SongslistPage } from './songslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongslistPageRoutingModule
  ],
  declarations: [SongslistPage]
})
export class SongslistPageModule {}
