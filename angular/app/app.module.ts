import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { CardeateilsComponent } from './cardeateils/cardeateils.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CardeateilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'Header',component:HeaderComponent},
      {path:'Car',component:CarsComponent},
      {path: 'Cardeateils',component:CardeateilsComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
