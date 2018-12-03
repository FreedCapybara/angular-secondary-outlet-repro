import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryContent1Component } from "./primary-content-1/primary-content-1.component";
import { PrimaryContent2Component } from "./primary-content-2/primary-content-2.component";
import { SecondaryContentComponent } from "./secondary-content/secondary-content.component";

@NgModule({
  declarations: [
    AppComponent,
    PrimaryContent1Component,
    PrimaryContent2Component,
    SecondaryContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
