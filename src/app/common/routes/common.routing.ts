import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [

  { path: '', redirectTo: 'user', pathMatch: 'full' },

  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    data: { preload: true }
  }
];