import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from 'src/app/services/pages.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



   title: string = 'početna';
   pages: object[] | any;
   expandItem: number = 0;

   constructor(
      private router: Router,
      private titleService: TitleService,
      private pagesService: PagesService,
   ) { }

   ngOnInit(): void {
      this.titleService.titleChanged.subscribe((tit: string) => this.title = tit)
      this.pages = this.pagesService.pages;
   }

   @HostListener('document:keydown', ['$event']) onkeydownhandler(event: KeyboardEvent) {
      if (event.key === 'p') {this.router.navigate(['paketi'])}
      else if (event.key === 's') {this.router.navigate(['saradnici'])}
      else if (event.key === 'k') {this.router.navigate(['kombi'])}
   }

   nav(ind: any) {
      this.expandItem = 0;
      this.router.navigate(['paketi/' + ind]);
   }

   toggleSub(ind: any) {
      this.expandItem != 2 ? this.expandItem = (+ind) : this.expandItem = 0;
   }

   hideSub() {
      this.expandItem = 0;
   }
}