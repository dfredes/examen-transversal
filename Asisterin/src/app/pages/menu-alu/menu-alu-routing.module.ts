import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAluPage } from './menu-alu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAluPageRoutingModule {}
