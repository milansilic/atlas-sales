import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AccidentsComponent } from './pages/accidents/accidents.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'accidents', component: AccidentsComponent},
  {path: 'packages', component: PackagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
