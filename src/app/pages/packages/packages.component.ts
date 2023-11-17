import { Component } from '@angular/core';
import { NoCommaPipe } from '../../pipes/decimal.pipe'

@Component({
   selector: 'app-packages',
   templateUrl: './packages.component.html',
   styleUrls: ['./packages.component.scss']
})

export class PackagesComponent {
   packages: object[] | any = [
      {name: 'Nacionalni', price: 3990, country: 'Srbija', img: 'i_nac.webp'},
      {name: 'Euro+', price: 5990, country: 'Evropa', img: 'i_eur.webp'},
      {name: 'Internacionalni+', price: 7990, country: 'Evropa', img: 'i_int.webp'},
      {name: 'City paket', price: 1890, country: 'Srbija', img: 'i_city.webp'},
      {name: 'Moj Paket', price: 4790, country: 'Srbija', img: 'i_moj.webp'},
      {name: 'Platinum Paket', price: 19990, country: 'Srbija + Evropa', img: 'i_plat.webp'},
      {name: 'Guma paket', price: 3490, country: 'Srbija', img: 'i_gum.webp'},
      {name: 'Kombi paket', price: 5990, country: 'Srbija', img: 'i_komb.webp'},
      {name: 'Kombi Maxi paket', price: 14990, country: 'Srbija', img: 'i_kombm.webp'},
      {name: 'Moto Srbija paket', price: 5990, country: 'Srbija', img: 'i_motoS.webp'},
      {name: 'Moto Evropa Paket', price: 5990, country: 'Evropa', img: 'i_motoE.webp'},
   ]

}