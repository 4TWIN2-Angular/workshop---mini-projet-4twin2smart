import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.defaultUrl;
  }
 
  addClub(club: Club) {
    return this.httpClient.post(this.url +'/club/add', club);
  }
  getAllclubs(){
    return this.httpClient.get<Club[]>(this.url+'/club');
  }
  updateClub(id:number,club:Club){
    return this.httpClient.put(this.url+'/club/update/'+id,club)
  }
  DeleteClub(id:number){
    return this.httpClient.delete(this.url+'/club/delete/'+id);
  }

}
