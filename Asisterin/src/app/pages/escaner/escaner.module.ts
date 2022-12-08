import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanerPageRoutingModule } from './escaner-routing.module';

import { EscanerPage } from './escaner.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanerPageRoutingModule,
    QRCodeModule
  ],
  declarations: [EscanerPage]
})
export class EscanerPageModule {}
