import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";

import { MaterialModule } from './material.module';

import { CommonLayoutComponent } from './pages/common-layout/common-layout.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
    
  ],
  declarations: [
      CommonLayoutComponent,
      FooterComponent,
      HeaderComponent,
      SideNavComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,

    CommonLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
  ],

  entryComponents: [],
    providers:[]
})
export class CommonDataModule { }
