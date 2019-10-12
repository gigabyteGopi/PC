import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonDataModule } from './common/common.module';
import { CommonLayoutComponent } from './common/pages/common-layout/common-layout.component';
import { CONTENT_ROUTES } from './common/routes/common.routing';


const routes: Routes = [
 
  {
    path: '',
    component: CommonLayoutComponent,
    children: CONTENT_ROUTES
  },
 
 ];
@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  CommonDataModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
