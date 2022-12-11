
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mailingcontent } from '../models/mailing';
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
updatemembre(membre:membre):Observable<any>{
  return this.httpmembre.put<any>(this.membreurl+'edit',membre)
}
retrievemembre(id:number):Observable<membre>{
  return  this.httpmembre.get<membre>(this.membreurl+id)
}

envoyermail(mail:Mailingcontent):Observable<String>{
return this.httpmembre.put<String>(this.membreurl+'mail',mail)

}

gethistory(toemail:String):Observable<Mailingcontent[]>{
  return this.httpmembre.get<Mailingcontent[]>(this.membreurl+'history'+'/'+toemail)
}
}
