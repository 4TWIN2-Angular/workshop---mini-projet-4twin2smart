import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from '../models/sponsor';
import { evenement as Event } from '../models/evenement';
@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsorurl="http://localhost:9090/sponsor/"
  private eventurl="http://localhost:9090/event/"


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpsponsor:HttpClient, private httpevent:HttpClient) { }
  getallsponsor():Observable<Sponsor[]>{
    return this.httpsponsor.get<Sponsor[]>(this.sponsorurl+'all')
  }

  getallevent():Observable<Event[]>{
    return this.httpevent.get<Event[]>(this.eventurl+'all')

  }
  addsponsor(sponsor:Sponsor):Observable<Sponsor>{
    return this.httpsponsor.post<Sponsor>(this.sponsorurl+'save',sponsor,this.httpOptions)
}
deletesponsor(id:number):Observable<String>{
  return this.httpsponsor.delete<String>(this.sponsorurl+id)
}
  }
