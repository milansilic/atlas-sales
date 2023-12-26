import { Component, OnInit } from '@angular/core';
import { AssociatesService } from 'src/app/services/associates.service';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';

@Component({
   selector: 'app-associates',
   templateUrl: './associates.component.html',
   styleUrls: ['./associates.component.scss']
})
export class AssociatesComponent implements OnInit {
   associates: object[] | any = []
   
   constructor(
      private associatesService: AssociatesService, 
      private route: ActivatedRoute,
      private titleService: TitleService,
   ){}

   ngOnInit(): void {
      this.associates = this.associatesService.associates;
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
   }
}