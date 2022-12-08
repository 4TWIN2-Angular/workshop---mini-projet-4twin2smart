import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from '../models/sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsorurl="http://localhost:9090/sponsor/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpsponsor:HttpClient) { }
  getallsponsor():Observable<Sponsor[]>{
    return this.httpsponsor.get<Sponsor[]>(this.sponsorurl+'all')

  }
  addsponsor(sponsor:Sponsor):Observable<Sponsor>{
    return this.httpsponsor.post<Sponsor>(this.sponsorurl+'save',sponsor,this.httpOptions)
}
deletesponsor(id:number):Observable<String>{
  return this.httpsponsor.delete<String>(this.sponsorurl+id)
}
}
