import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AssociatesService } from 'src/app/services/associates.service';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import * as L from 'leaflet';
import { Icon } from 'leaflet';

@Component({
   selector: 'app-associates',
   templateUrl: './associates.component.html',
   styleUrls: ['./associates.component.scss']
})
export class AssociatesComponent implements OnInit, AfterViewInit{
   associates: object[] | any = []

   map: any;

   private initMap(): void {
      setTimeout(() => {
         this.map = L.map('map', {
            center: [44.25, 20.71],
            zoom: 8.5
         });

         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
         }).addTo(this.map);

         this.associates.forEach((a:any) => {
            L.marker(
               [a.lat, a.lng], { icon: L.icon({ iconUrl: 'assets/icons/marker.svg', iconSize: [30, 30] }) 
            }).bindTooltip(a.person, { permanent: true, direction: 'bottom' 
            }).bindPopup(a.city).addTo(this.map);   
         });
      }, 1);
   }

   constructor(
      private associatesService: AssociatesService,
      private route: ActivatedRoute,
      private titleService: TitleService,
   ) { }

   ngOnInit(): void {
      this.associates = this.associatesService.associates;
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
   }

   ngAfterViewInit(): void {
      this.initMap();
   }
}