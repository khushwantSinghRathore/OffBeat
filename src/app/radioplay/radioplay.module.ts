import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioplayPageRoutingModule } from './radioplay-routing.module';

import { RadioplayPage } from './radioplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioplayPageRoutingModule
  ],
  declarations: [RadioplayPage]
})
export class RadioplayPageModule {}
