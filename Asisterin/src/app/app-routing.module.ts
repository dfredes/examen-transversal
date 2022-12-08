import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'escaner',
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
  {
    path: 'generador',
    loadChildren: () => import('./pages/generador/generador.module').then( m => m.GeneradorPageModule)
  },
  {
    path: 'menu-pro',
    loadChildren: () => import('./pages/menu-pro/menu-pro.module').then( m => m.MenuProPageModule)
  },
  {
    path: 'menu-alu',
    loadChildren: () => import('./pages/menu-alu/menu-alu.module').then( m => m.MenuAluPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
