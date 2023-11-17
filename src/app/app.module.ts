import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AsideComponent } from './components/aside/aside.component';
import { AccidentsComponent } from './pages/accidents/accidents.component';

import { PackagesService } from './services/packages.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PackagesComponent,
    AsideComponent,
    AccidentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
