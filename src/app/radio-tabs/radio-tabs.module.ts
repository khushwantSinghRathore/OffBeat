import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioTabsPageRoutingModule } from './radio-tabs-routing.module';

import { RadioTabsPage } from './radio-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioTabsPageRoutingModule
  ],
  declarations: [RadioTabsPage]
})
export class RadioTabsPageModule {}
