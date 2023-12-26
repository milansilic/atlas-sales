import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   news: object[] | any = [
      {
         date: '17.11.2023',
         title: 'Atlas Servis - Istorijat',
         text: 'Atlas Servis je osnovan 2008. godine od strane Zorana Pilića i Mariosa Skutelisa. Igrom slučaja, poslovne obaveze su ukrstile naše puteve, uprkos činjenici da su naše tadašnje aktivnosti bile vezane za apsolutno druge poslovne grane. Na jednom neformalnom razgovoru smo razmenili lična iskustva sa putovanja čija je idila bila narušena kvarom vozila. To su bili događaji kojih smo se nerado sećali a odnosili su se na višesatno čekanje pomoći, u vremenskim neprilikama, kao i visoka naknada za lošu uslugu koju smo dobili. Naša poslovna saradnja se širila, a usput su do nas dolazile informacije o prevarama na autoputevima, o starom voznom parku, kao i o brojnim i čestim udesima. Setili bi se tako i svojih iskustava i shvatili da slična i gora iskustva građani Srbije svakodnevno osećaju na svojoj koži. Tada smo došli do zaključka da u navedenoj grani postoji neiskorišten potencijal i da kolege vozači, u neprilici nemaju neki izbor i da je pri tome kvalitet misaona imenica. Bio je to povod da osnujemo Atlas Servis, jer insistiramo na pravu vozača Srbije da dobiju jednak nivo usluge i sigurnosti u kojima uživaju vozači zapadne Evrope. Kao veliki ljubitelji automobila, još od malena, napokon smo uspeli da spojimo našu strast sa profesijom. I tako je Atlas Servis rođen!'
      },
      {
         date: '16.11.2023', 
         title: 'Atlas Servis - VIZIJA', 
         text: 'Naša vizija je da svojom posvećenošću, entuzijazmom, brzinom i pre svega kvalitetom usluge obezbedimo da Atlas Servis bude prvi i jedini izbor svih vozača širom Srbije kada je u pitanju pomoć na putu.'
      },
      { 
         date: '15.11.2023', 
         title: 'Atlas Servis - MISIJA', 
         text: 'Nas u Atlas Servisu pokreće kvalitetna usluga. Težimo da našim korisnicima pružimo jedinstven osećaj sigurnosti i bezbrižnosti na putu, zahvaljujući našem strastvenom i posvećenom timu radnika i saradnika. Kvalitetom, brzinom i preciznošću  naše usluge, želimo ostvariti dugoročnu saradnju i zadovoljstvo svih klijenata.' 
      }
   ];

   constructor (
      private route: ActivatedRoute,
      private titleService: TitleService,
   ) {}

   ngOnInit(): void {
      this.titleService.titleChanged.emit(this.route.snapshot.url[0].path);
   }
}