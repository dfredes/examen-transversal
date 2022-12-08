import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProPageRoutingModule } from './menu-pro-routing.module';

import { MenuProPage } from './menu-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProPageRoutingModule
  ],
  declarations: [MenuProPage]
})
export class MenuProPageModule {}
