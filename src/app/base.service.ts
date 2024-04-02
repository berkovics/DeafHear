import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  serverUrl = "http://localhost:3000/hearShop"
  private kosar:any = []
  private kosarTartalom = new BehaviorSubject(this.kosar)

  constructor(private http:HttpClient) { }

  getShops() {
    return this.http.get(this.serverUrl)
  }

  getKosarTartalom(){
    return this.kosarTartalom
  }

  frissul(){
    this.kosarTartalom.next(this.kosar)
  }

  addTetel(idv:any, dbv:any){
    let tetel = {id:idv, db:dbv}
    let van = this.kosar.findIndex(
      (e:any) => e.id == idv
    )
    if (van >= 0) this.kosar[van].db = dbv
    else this.kosar.push(tetel)
    this.frissul()
  }

  tetelTorlese(tetel:any){
    this.kosar = this.kosar.filter(
      (e:any) => e.id != tetel.id
    )
    this.frissul()
  }
}
