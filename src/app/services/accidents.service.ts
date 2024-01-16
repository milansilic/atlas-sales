export class AccidentsService {
   accidents: object[] = [
      {
         acc: 'vozilo neće da upali',
         emotions: 'Taman ste se spremili za vožnju od tačke A do tačke B, kad od jednom “hladan tuš” - problem koje vam ne da ni da krenete… ali bukvalno! Za svakog vozača jedan od najbednijih osećaja, jer se problem ne vidi, sve dok ne pokušamo da upalimo motor. Sve je naizgled u redu, već projektujemo kuda treba da idemo i šta da radimo, (a možda  i žurimo), ulazimo u auto, vezujemo se, okrećemo ključ kad ono IZNENAĐENJE. Ubrzo shvatamo da ništa od planiranog neće biti kako smo želeli i već mislimo o novom trošku. Razlozi: kvar akumulatora, startera ili zupčastog kaiša, slomljena razvodna kapa, loš kalem za paljenje, začepljen filter za gorivo...',
         expense: 'od 10 minuta do nekoliko sati / od 0 do 200',
         img: "assets/img/car-can't-start.webp"
      },{
         acc: 'oštećenje pneumatika (pukla guma)',
         emotions: 'Oštećenje i pucanje gume je jedan od najčešćih kvarova na putu. Ukoliko guma nije samo izduvana već postoje tragovi bušenja, imamo opcije da je sami zamenimo ili da angažujemo nekog ko to zna. Bilo kako bilo, taj nemili događaj koji pre ili kasnije "pogodi" svakog vozača, ume veoma negativno da utiče na naše živce i raspoloženje, posebno ako unapred nemamo spremnu opciju rešenja.',
         expense: 'od 10 minuta do 2 sata / od 5 do 105',
         img: "assets/img/flat-tire.webp"
      },{
         acc: 'oštećeno vozilo (usled udesa)',
         emotions: 'Najveći strah svih vozača. Da li usled svoje ili tuđe nepažnje ili greške pri upravljanju vozilom, zbog iznenadnog kvara na vozilu ili događaja na putu... na žalost, saobraćane nezgode se dešavaju i sastavni su deo saobraćaja. Šteta često nije samo materijalna nego i zdravstvena. Ostavlja fizičke i psihičke posledice na vozača, kome je u tim trenutcima potreban pomoć, često "na više nivoa".',
         expense: 'od 10 minuta do 2 sata / od 50 do ??? hiljada',
         img: 'assets/img/accident.webp'
      },{
         acc: 'kvar kvačila',
         emotions: 'Kvačilo, spojnica je vrlo važan sklop na vozilu. Njegova funkcija je da “spoji” motor sa menjačem, tj. da izvrši prenos snage sa motora na menjač, odnosno, pogonske točkove. Najčešći problem prouzrokuje trošenje frikcionog materijala na lameli kvačila. Vek trajanja kvačila zavisi od kvaliteta proizvodnje, marke ali ponajviše od stila vožnje.',
         expense: 'od 100 do 600',
         img: 'assets/img/clutch.webp'
      },{
         acc: 'vozilo se ugasilo tokom vožnje',
         emotions: 'Jedan od najneprijatnijih scenarija. Najčešće ste sami, daleko od bilo koga ko može da pruži stručnu pomoć, osuđeni da se sami snađete i hitno pomerite vozilo sa puta. Prepušteni ste svojim mehaničarskim sposobnostima ili ljudima u okolini, koje ne poznajete. Od čitavog niza uzroka, najčešće vozač nije u mogućnosti sam da ga detektuje a kamoli otkloni.',
         expense: 'od 5 minuta do nekoliko sati / od 0 do ??? hiljada',
         img: 'assets/img/car-dies.webp'
      },{
         acc: 'kvar menjača',
         emotions: 'Menjač, kao deo sistema za prenos snage je jedan od osnovnih delova vozila. Kada se pokvari - vožnja je nemoguća. Njegova funkcija je da prenosi snagu iz motora na točkove pomoću zupčanika različitih veličina koji redukuju broj obrtaja motora. Sve to uz pomoć kvačila koje služi kao spojnica. Vozači retko proveravaju stanje menjača i ne uzimju u obzir ispravnost sve dok ne dođe do kvara, kada evo novog troška i glavobolje. Precizna utvrđivanje tipa kvara menjača zahteva profesionalnu dijagnostiku sa posebnim alatima.',
         expense: 'od 1 do nekoliko dana / od 150 d0 3.000',
         img: 'assets/img/gearbox.webp'
      },{
         acc: 'kvar hladnjaka (prokuvalo vozilo)',
         emotions: 'Gotovo svaki automobil čiji je rashladni sistem zapušten naprosto prokuva a posebno leti. To se najčešće događa na za to najmanje pogodnom mestu, na putu i to dužim destinacijama, u zabačenim delovima, tokom najtoplijeg dela dana ili godine. Vozilom je tada nemoguće upravljati a poseban problem je izloženost putnika teškim uslovima i sredini u kojoj se nalaze. Tada stručna i brza pomoć je veoma poželjna.',
         expense: 'od 0 do nekoliko sati / od 0 do nekoliko stotina ',
         img: 'assets/img/boiled-mortor.jpg'
      },{
         acc: 'kvar elektronike',
         emotions: 'Zbog napretka tehnologije danas ima sve više elektronike u vozilu. Elektronika je najčešći uzrok kvarova na modernim automobilima (čak 27% svih kvarova). Moderna vozila su opremljena sa sve više elektronskih komponenti, te se problemi sa elektronikom javljuju češće nego pre. Umeste zamene, znatno povoljnije rešenje je popravka. Međutim kad se desi problem, često je vozilo blokirano. Kvar elektronike obuhvata širok dijapazon kvarova: starter, senzori, releji, instalacije, koordinarni konektori, računar vozila, komandna table, svetla, airbag centrale, podizači stakla…',
         expense: 'od 1 do nekoliko dana / od 100 do nekoliko hiljada ',
         img: 'assets/img/electronics.webp'
      },{
         acc: 'sletanje sa puta',
         emotions: '',
         expense: '',
         img: 'assets/img/off-the-road.webp'
      },{
         acc: 'kvar kočnica',
         emotions: '',
         expense: '',
         img: 'assets/img/brakes.jpg'
      },{
         acc: 'nestanak goriva',
         emotions: '',
         expense: '',
         img: 'assets/img/brakes2.jpg'
      },{
         acc: 'gubitak ključeva',
         emotions: '',
         expense: '',
         img: 'assets/img/'
      },{
         acc: 'kvar motora',
         emotions: '',
         expense: '',
         img: 'assets/img/'
      },
   ]
}