import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppServiceService } from "./app-service.services";

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
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
