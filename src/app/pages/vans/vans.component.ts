import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import { VanService } from 'src/app/services/van.service';

@Component({
   selector: 'app-vans',
   templateUrl: './vans.component.html',
   styleUrls: ['./vans.component.scss']
})
export class VansComponent implements OnInit {
   vans: object[] | any = []

   constructor(
      private route: ActivatedRoute,
      private titleService: TitleService,
      private vansService: VanService,
   ) { }

   ngOnInit(): void {
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
      this.vans = this.vansService.vans;
   }
}