import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AsideComponent } from './components/aside/aside.component';
import { AccidentsComponent } from './pages/accidents/accidents.component';

import { PackagesService } from './services/packages.service';
import { AssociatesComponent } from './pages/associates/associates.component';
import { AssociatesService } from './services/associates.service';
import { TitleService } from './services/title.service';
import { AccidentsService } from './services/accidents.service';
import { PagesService } from './services/pages.service';
import { PackageComponent } from './pages/package/package.component';
import { VansComponent } from './pages/vans/vans.component';
import { VanService } from './services/van.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PackagesComponent,
    AsideComponent,
    AccidentsComponent,
    AssociatesComponent,
    PackageComponent,
    VansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LeafletModule
  ],
  providers: [
    AccidentsService, 
    AssociatesService, 
    PagesService,
    PackagesService, 
    TitleService, 
    VanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}