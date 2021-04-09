import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseArtistPageRoutingModule } from './choose-artist-routing.module';

import { ChooseArtistPage } from './choose-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseArtistPageRoutingModule
  ],
  declarations: [ChooseArtistPage]
})
export class ChooseArtistPageModule {}
