export class PackagesService {
   packages: object[] | any = [
      {
         name: 'Nacionalni',
         price: '3.990',
         territory: 'Srbija',
         coverTerritory: 'Srbije',
         tow: '1 (neogr.) + 1 (50km)',
         img: 'i_nac.webp',
         fullName: 'Nacionalni paket',
         noOfAssists: 2,
         assits: [
            {
               service: '1. Velika asistencija:',
               perks: [
                  'Šlepanje bez ograničenja kilometraže ILI do najbližeg BOSCH Car/ovlašćenog servisa, sa popravkom do 100€ (ukoliko je adresa korisnika dalja od 100km)', 
                  'Prevoz svih putnika', 
                  'Noćenje za sve putnike', 
                  'Čuvanje vozila (3 dana)', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva', 
                  'Prevoz priključnog vozila'
               ]
            },{
               service: '2. Mala asistencija:',
               perks: [
                  'Šlepanje 50km (u oba pravca)', 
                  'Prevoz svih putnika', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva'
               ]
            },
         ],
         note: 'Paket obezbeđuje jednu veliku i jednu malu asistenciju'
      },
      { 
         name: 'Euro+', 
         price: '5.990', 
         territory: 'Evropa', 
         coverTerritory: 'Evrope (bez Srbije)',
         tow: '1 (do adrese)', 
         img: 'i_eur.webp', 
         fullName: 'Euro+ paket' ,
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija:',
               perks: [
                  'Šlepanje vozila za Republiku Srbiju do adrese Korisnika ILI šlepanje do najbližeg servisa i pokriće troškova popravke do 500€', 
                  'Prevoz svih putnika', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Hotelski smeštaj do 4 noćenja, za sve putnike',
                  'Rent a Car do 4 dana (do 30€ po danu)',
                  'Nastavak putovanja (troškovi autobuskih karata do željne destinacije)',
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
      { 
         name: 'Inter+', 
         price: '7.990', 
         territory: 'Srbija + Evropa', 
         coverTerritory: 'Srbije i Evrope',
         tow: '1Srb (neogr.) + 1Srb (50km) + 1Evr (do adrese)', 
         img: 'i_int.webp', 
         fullName: 'Interacionalni+ paket',
         noOfAssists: 3,
         assits: [
            {
               service: '1. Velika asistencija - Srbija:',
               perks: [
                  'Šlepanje bez ograničenja kilometraže ILI do najbližeg BOSCH Car/ovlašćenog servisa, sa popravkom do 100€ (ukoliko je adresa korisnika dalja od 100km)', 
                  'Prevoz svih putnika', 
                  'Noćenje za sve putnike', 
                  'Čuvanje vozila (3 dana)', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva', 
                  'Prevoz priključnog vozila'
               ]
            },{
               service: '2. Mala asistencija - Srbija:',
               perks: [
                  'Šlepanje 50km (u oba pravca)', 
                  'Prevoz svih putnika', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva'
               ]
            },
            {
               service: '3. Asistencija - Evropa:',
               perks: [
                  'Šlepanje vozila za Republiku Srbiju do adrese Korisnika ILI šlepanje do najbližeg servisa i pokriće troškova popravke do 500€', 
                  'Prevoz svih putnika', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Hotelski smeštaj do 4 noćenja, za sve putnike',
                  'Rent a Car do 4 dana (do 30€ po danu)',
                  'Nastavak putovanja (troškovi autobuskih karata do željne destinacije)',
               ]
            }
         ],
         note: 'Paket obezbeđuje po jednu od sve tri navedene asistencije'
      },
      { 
         name: 'City', 
         price: '1.890', 
         territory: 'Srbija', 
         coverTerritory: 'Srbije',
         tow: '1 (50km) + 1 (50km)', 
         img: 'i_city.webp', 
         fullName: 'City paket',
         noOfAssists: 2,
         assits: [
            {
               service: 'Asistencija 1:',
               perks: [
                  'Popravka na licu mesta (struja, pneumatik, nestanak goriva) besplatno ili jedna dostava ključeva besplatno', 
               ]
            },{
               service: 'Asistencija 2',
               perks: [
                  'Šlepanje do 50km (u oba pravca)', 
                  'Prevoz svih putnika', 
                  'Prevoz priključnog vozila',
                  'Popust za uslugu rent a car-a 10%', 
                  'Čuvanje vozila 1 dan'
               ]
            },
         ],
         note: 'Paket obezbeđuje ukupno 2 asistencije (od ponuđenih), po želji korisnika'
      },
      { 
         name: 'Moj', 
         price: '4.790', 
         territory: 'Srbija', 
         coverTerritory: 'Srbije',
         tow: '1 (neogr.)', 
         img: 'i_moj.webp', 
         fullName: 'Moj paket',
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija (se vezuje za korisnika, a ne za vozilo):',
               perks: [
                  'Šlepanje bez ograničenja kilometraže ILI do najbližeg BOSCH Car/ovlašćenog servisa, sa popravkom do 100€ (ukoliko je adresa korisnika dalja od 100km)', 
                  'Prevoz svih putnika', 
                  'Noćenje za korisnika paketa', 
                  'Čuvanje vozila (3 dana)', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva', 
                  'Prevoz priključnog vozila'
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
      { 
         name: 'Platinum', 
         price: '19.990', 
         territory: 'Srbija + Evropa', 
         coverTerritory: 'Srbije i Evrope (veže se za dva automobila)',
         tow: '2Srb (neogr.) + 2Srb (50km) + 2Evr (do adrese)', 
         img: 'i_plat.webp', 
         fullName: 'Platinum paket',
         noOfAssists: 7,
         assits: [
            {
               service: '1. Velika asistencija - Srbija:',
               perks: [
                  'Šlepanje bez ograničenja kilometraže ILI do najbližeg BOSCH Car/ovlašćenog servisa, sa popravkom do 100€ (ukoliko je adresa korisnika dalja od 100km)', 
                  'Prevoz svih putnika', 
                  'Noćenje za sve putnike', 
                  'Čuvanje vozila (3 dana)', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva', 
                  'Prevoz priključnog vozila'
               ]
            },{
               service: '2. Mala asistencija - Srbija:',
               perks: [
                  'Šlepanje 50km (u oba pravca)', 
                  'Prevoz svih putnika', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Dostava ključeva'
               ]
            },
            {
               service: '3. Asistencija - Evropa:',
               perks: [
                  'Šlepanje vozila za Republiku Srbiju do adrese Korisnika ILI šlepanje do najbližeg servisa i pokriće troškova popravke do 500€', 
                  'Prevoz svih putnika', 
                  'Manja popravka na licu mesta (struja, pneumatik, nestanak goriva)', 
                  'Hotelski smeštaj do 4 noćenja, za sve putnike',
                  'Rent a Car do 4 dana (do 30€ po danu)',
                  'Nastavak putovanja (troškovi autobuskih karata do željne destinacije)',
               ]
            },
            {
               service: '4. GUMA asistencija',
               perks: [
                  'Servis na licu mesta - zamena ili popravak neispravnog pneumatika uz pomoć seta za reparaciju ILI šlepanje do najbližeg vulkanizera'
               ]
            }
         ],
         note: 'Paket obezbeđuje dve usluge pod tačkama 1, 2 i 3 i jednu pod tačkom 4.'
      },
      { 
         name: 'Guma', 
         price: '3.490 / 1490', 
         territory: 'Srbija', 
         coverTerritory: 'Srbije ili Evrope (u zavisnosti koji paket već ima)',
         tow: '1 - do najbližeg vulkanizera', 
         img: 'i_gum.webp', 
         fullName: 'Guma paket',
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija:',
               perks: [
                  'Servis na licu mesta - zamena ili popravak neispravnog pneumatika uz pomoć seta za reparaciju...',
                  '...ILI šlepanje do najbližeg vulkanizera + pokriće troškova popravke pneumatika, do 100€ za sva 4 pneumatika...',
                  '...ILI šlepanje do najbližeg vulkanizera + pokriće troškova zamene neispravnih pneumatika, do 2.000€ za sva 4 pneumatika (ukoliko popravka nije moguća).',
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
      { 
         name: 'Kombi', 
         price: '5.990', 
         territory: 'Srbija', 
         coverTerritory: 'Srbije',
         tow: '1 (100km)', 
         img: 'i_komb.webp', 
         fullName: 'Kombi paket',
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija (samo za vozila do 5t ukupne nosivosti sa teretom):',
               perks: [
                  'Šlepanje do 100km ILI manji servis na licu mesta (struja, pneumatik, nestanak goriva) do 100km ILI dostava ključeva do 100km,',
                  'Prevoz 2 putnika,',
                  'Organizacija prevoza ostalih putnika,',
                  'Organizacija prevoza tereta',
                  'Priključno vozilo: organizacija prevoza priključnog vozila o trošku korisnika usluge',
                  'Program lojalnosti',
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
      { 
         name: 'Kombi Maxi', 
         price: '14.990', 
         territory: 'Srbija', 
         coverTerritory: 'Srbije',
         tow: '1 (neogr.)', 
         img: 'i_kombm.webp', 
         fullName: 'Kombi Maxi paket',
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija (samo za vozila do 5t ukupne nosivosti sa teretom):',
               perks: [
                  'Šlepanje bez ograničenja kilometraže ILI manji servis na licu mesta (struja, pneumatik, nestanak goriva) ILI dostava ključeva,',
                  'Asistencija iz guma paketa (popravka na licu mesta ili šlep do vulkanizera i popravka do 100€ ili kupovina novih guma do 2.000€),',
                  'Prevoz 2 putnika,',
                  'Organizacija prevoza ostalih putnika,',
                  'Organizacija prevoza tereta,',
                  'Priključno vozilo: organizacija prevoza priključnog vozila o trošku korisnika usluge.'
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
      { 
         name: 'Moto Srbija', 
         price: '5.990', 
         territory: 'Srbija', 
         coverTerritory: 'Srbije',
         tow: '1 (neogr.)', 
         img: 'i_motoS.webp', 
         fullName: 'Moto Srbija paket',
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija:',
               perks: [
                  'Šlepanje motocikla i prevoz putnika, bez ograničenja kilometraže...',
                  '...ILI manja popravka na licu mesta...',
                  '...ILI dostava ključeva.'
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
      { 
         name: 'Moto Evropa', 
         price: '5.990', 
         territory: 'Evropa', 
         coverTerritory: 'Evrope',
         tow: '1 (do adrese)', 
         img: 'i_motoE.webp', 
         fullName: 'Moto Evropa paket',
         noOfAssists: 1,
         assits: [
            {
               service: 'Asistencija:',
               perks: [
                  'Šlepanje motocikla i prevoz putnika za Republiku Srbiju do adrese...',
                  '...ILI šlepanje do najbližeg servisa i pokriće troškova popravke motocikla do 500€,',
                  'Hotelski smeštaj do 4 noćenja, za sve putnike,',
                  'Rent a Car do 4 dana (do 30€ po danu),',
                  'Nastavak putovanja (troškovi autobuskih karata do željne destinacije).'
               ]
            }
         ],
         note: 'Jedna asistencija'
      },
   ]
}