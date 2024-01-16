import { AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
   selector: 'app-package',
   templateUrl: './package.component.html',
   styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit, AfterViewChecked {
   packages: object[] | any;
   package: object | any;
   noOfAssists: string | undefined;
   pacIndx: number | any;

   constructor(
      private route: ActivatedRoute,
      private router: Router,
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

   ngAfterViewChecked(): void {
      this.pacIndx = +this.route.snapshot.url[1].path;
   }

   packPrev(){
      this.pacIndx > 0 ? this.pacIndx = +this.pacIndx - 1 : this.pacIndx = +this.packagesService.packages.length - 1;
      this.router.navigate([`paketi/${this.pacIndx}`]);
   }
   
   packNext(){
      this.pacIndx < this.packagesService.packages.length - 1 ? this.pacIndx = +this.pacIndx + 1 : this.pacIndx = 0;
      this.router.navigate([`paketi/${this.pacIndx}`]);         
   }

   @HostListener('document:keydown', ['$event']) onkeydownhandler(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {this.packPrev()}
      else if (event.key === 'ArrowRight') {this.packNext()}
   }
}