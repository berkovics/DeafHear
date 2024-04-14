import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = "https://localhost:7144/api/Registers/"
  private registerSub= new Subject()

  hallasUrl = "https://localhost:7144/api/Hallas/"
  private hallasSub= new Subject()
  
  constructor(private http:HttpClient) { 
    this.loadData()
    this.loadData2()
  }

  getAll(){
    return this.registerSub
  }

  private loadData(){
    this.http.get(this.url).subscribe(
      (res)=>this.registerSub.next(res)
    )
  }

  postData(body:any){
    this.http.post(this.url, body).forEach(
      ()=>this.loadData()
    )
  }

  putData(body:any){
    this.http.put(this.url+body.id, body).forEach(
      ()=>this.loadData()
    )
  }
  
  deleteData(body:any){
    this.http.delete(this.url+body.id).forEach(
      ()=>this.loadData()
    )
  }

  getHallasAll(){
    return this.hallasSub
  }

  private loadData2(){
    this.http.get(this.hallasUrl).subscribe(
      (res)=>this.hallasSub.next(res)
    )
  }

  postHallas(body:any){
    this.http.post(this.hallasUrl, body).forEach(
      ()=>this.loadData2()
    )
  }
}
