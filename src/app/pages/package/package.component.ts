import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
   selector: 'app-package',
   templateUrl: './package.component.html',
   styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
   packages: object[] | any;
   package: object | any;
   noOfAssists: string | undefined;

   constructor(
      private route: ActivatedRoute,
      private packagesService: PackagesService,
      private titleService: TitleService,
   ) { }

   ngOnInit(): void {
      this.route.params.subscribe(
         (params: Params) => {
            this.package = this.packagesService.packages[+params['id']];
            if (this.package.noOfAssists > 5) { this.noOfAssists = 'asistencija' }
            else if (this.package.noOfAssists > 1) { this.noOfAssists = 'asistencije' }
            else if (this.package.noOfAssists === 1) { this.noOfAssists = 'asistencijom' }
         }
      )
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
   }
}