import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { evenement } from '../models/evenement';
@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

 
  constructor(private http:HttpClient) { }
   url="http://localhost:9090/event";


  get_list_event(){
    return this.http.get(this.url+"/all")
  }
  ajouter_event(Event:any){ 

    return this.http.post(this.url+"/save",Event)
  }
   modifier_event(E:evenement,id_E:number){
    return this.http.put(`${this.url}/${id_E}`,E);
   }
   getbyid(id_E:number){
    return this.http.get<evenement>(`${this.url}/${id_E}`);

   }
   deleteev(id_E:number){
     return this.http.delete(`${this.url}/${id_E}`);
   }

  }


