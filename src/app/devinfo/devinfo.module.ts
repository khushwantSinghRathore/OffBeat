import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevinfoPageRoutingModule } from './devinfo-routing.module';

import { DevinfoPage } from './devinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevinfoPageRoutingModule
  ],
  declarations: [DevinfoPage]
})
export class DevinfoPageModule {}
