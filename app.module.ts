import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarchartComponent } from './barchart/barchart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LogoutComponent } from './barchart/logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BarchartComponent,
    LogoutComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule ,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
