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
import { AssociatesComponent } from './pages/associates/associates.component';
import { AssociatesService } from './services/associates.service';
import { TitleService } from './services/title.service';
import { AccidentsService } from './services/accidents.service';
import { PagesService } from './services/pages.service';
import { PackageComponent } from './pages/package/package.component';

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
    PackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AccidentsService, 
    AssociatesService, 
    PagesService,
    PackagesService, 
    TitleService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}