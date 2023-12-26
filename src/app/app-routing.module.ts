import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AccidentsComponent } from './pages/accidents/accidents.component';
import { AssociatesComponent } from './pages/associates/associates.component';
import { PackageComponent } from './pages/package/package.component';
import { VansComponent } from './pages/vans/vans.component';

const routes: Routes = [
   {path:'', redirectTo: 'početna', pathMatch : 'full'},
   {path: 'početna', component: HomeComponent},
   {path: 'nezgode', component: AccidentsComponent},
   {path: 'paketi', component: PackagesComponent},
   {path: 'saradnici', component: AssociatesComponent},
   {path: 'paketi/:id', component: PackageComponent},
   {path: 'kombi', component: VansComponent},
   
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }