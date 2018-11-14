import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsComponent } from './views/requests/requests.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodeInputComponent } from './components/code-input/code-input.component';
import { CodeOutputComponent } from './components/code-output/code-output.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    PlayButtonComponent,
    HeaderComponent,
    FooterComponent,
    CodeInputComponent,
    CodeOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }