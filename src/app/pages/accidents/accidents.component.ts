import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccidentsService } from 'src/app/services/accidents.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
   selector: 'app-accidents',
   templateUrl: './accidents.component.html',
   styleUrls: ['./accidents.component.scss']
})
export class AccidentsComponent implements OnInit {
   accidents: object[] | undefined | any;

   constructor (
      private route: ActivatedRoute,
      private titleService: TitleService,
      private accidentsService: AccidentsService,
   ) {}

   ngOnInit(): void {
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
      this.accidents = this.accidentsService.accidents;      
   }
}