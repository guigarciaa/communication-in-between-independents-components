import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppService } from "./app-service.services";

import { AppComponent } from './app.component';
import { InputNameComponent } from "./input-name/input-name.component";
import { ListNamesComponent } from "./list-names/list-names.component";


@NgModule({
  declarations: [
    AppComponent,
    InputNameComponent,
    ListNamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
