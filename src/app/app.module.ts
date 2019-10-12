import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonDataModule } from './common/common.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonDataModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/PC' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
