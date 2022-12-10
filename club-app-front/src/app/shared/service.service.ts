import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private cluburl="http://localhost:9090/club"

  constructor(private httpclub: HttpClient) {

  }
 
  addClub(club: Club):Observable<any> {
    return this.httpclub.post<any>(this.cluburl +'/save',club);
  }
  getAllclubs():Observable<Club[]>{
    return this.httpclub.get<Club[]>(this.cluburl+'/all');
  }
  updateClub(id:number,club:Club){
    return this.httpclub.put(this.cluburl+'/edit/'+id,club)
  }
  DeleteClub(id:number){
    return this.httpclub.delete(this.cluburl+'/delete/'+id);
  }

  Retrieveclub(id:number):Observable<Club>{
    return  this.httpclub.get<Club>(this.cluburl+"/"+id)
  }
}
