import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages.service'
import { NoCommaPipe } from '../../pipes/decimal.pipe';
import { TitleService } from 'src/app/services/title.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-packages',
   templateUrl: './packages.component.html',
   styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit{
   packages: object[] | any = []

   constructor (
      private packagesService: PackagesService,
      private route: ActivatedRoute,
      private router: Router,
      private titleService: TitleService,
   ) {}

   ngOnInit(): void {      
      this.packages = this.packagesService.packages;
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
   }

   nav(ind: number){
      this.router.navigate(['paketi/' + ind]);
   }
}