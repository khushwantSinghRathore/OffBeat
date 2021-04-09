import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooselangPageRoutingModule } from './chooselang-routing.module';

import { ChooselangPage } from './chooselang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooselangPageRoutingModule
  ],
  declarations: [ChooselangPage]
})
export class ChooselangPageModule {}
