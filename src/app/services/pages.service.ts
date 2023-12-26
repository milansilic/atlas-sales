import { Injectable } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Injectable()
export class PagesService {

   pages: object[] = [
      {
         page:'početna',
         subpages: undefined
      },
      {
         page:'nezgode',
         subpages: undefined
      },
      {
         page:'paketi',
         subpages: this.packagesService.packages?.map((el:any)=>el.name),
      },
      {
         page:'saradnici',
         subpages: undefined
      }
   ];     

   constructor(private packagesService: PackagesService) {}
}