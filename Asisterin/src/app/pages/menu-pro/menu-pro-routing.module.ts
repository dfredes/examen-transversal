import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProPage } from './menu-pro.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuProPageRoutingModule {}
