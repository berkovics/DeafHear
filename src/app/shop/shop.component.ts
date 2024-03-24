import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  
  shopping:any
  showError = false
  errorMessage = ""

  shop:any
  tetelek:any

  oszlopok = [
    {}
  ]

  constructor(private base:BaseService) {
    this.base.getShops().subscribe(
      {
        next:(adatok) => {this.shopping = adatok; this.showError = false},
        error:(e) => {this.showError = true; this.errorMessage = e.message}
      }
    )

    this.base.getShops().subscribe(
      (adatok) => this.shop = adatok
    )   

    this.base.getKosarTartalom().subscribe(
      (adatok) => this.tetelek = adatok
    )
  }

  kosarba(id:any, db:any){
    this.base.addTetel(id, db)
  }

  keresBolt(id:any){
    return this.shop.find(
      (e:any) => e.id == id
    )
  }

  valtozas(tetel:any){
    this.base.addTetel(tetel.id, tetel.db)
  }

  tetelTorlese(tetel:any){
    this.base.tetelTorlese(tetel)
  }

  osszesen(){
    let sum = 0
    this.tetelek.forEach(
      (e:any) => {
        sum += this.keresBolt(e.id).ar * e.db      
    });
    return sum
  }
}
