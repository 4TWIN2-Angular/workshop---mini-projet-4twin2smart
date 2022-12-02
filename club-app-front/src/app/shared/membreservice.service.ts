
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { membre } from '../models/membre';



@Injectable({
  providedIn: 'root'
})
export class MembreserviceService {
  private membreurl="http://localhost:9090/membre/"

  constructor(private httpmembre:HttpClient) { }

  getallmembres():Observable<membre[]>{
    return this.httpmembre.get<membre[]>(this.membreurl+'all')

  }
  getnomclubs():Observable<String[]>{
    return this.httpmembre.get<String[]>(this.membreurl+'nomclubs')
  }
  addmembre(membre:membre,nomclub123:String):Observable<any>{
      return this.httpmembre.post<any>(this.membreurl+'save'+'/'+nomclub123,membre)
  }
  deletemembre(id:number):Observable<String>{
    return this.httpmembre.delete<String>(this.membreurl+id)
  }

}
