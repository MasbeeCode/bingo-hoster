import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import { SharedModule } from './modules/shared/display-grid/shared.module';
import { BingosModule } from './modules/bingos/bingos.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BingosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
