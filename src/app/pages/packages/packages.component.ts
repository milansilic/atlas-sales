import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages.service'
import { NoCommaPipe } from '../../pipes/decimal.pipe';

@Component({
   selector: 'app-packages',
   templateUrl: './packages.component.html',
   styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit{
   packages: object[] | any = []

   constructor (private packagesService: PackagesService) {}

   ngOnInit(): void {      
      this.packages = this.packagesService.packages
   }

}