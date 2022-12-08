import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAluPageRoutingModule } from './menu-alu-routing.module';

import { MenuAluPage } from './menu-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAluPageRoutingModule
  ],
  declarations: [MenuAluPage]
})
export class MenuAluPageModule {}
