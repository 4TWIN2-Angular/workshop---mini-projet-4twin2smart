import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { university } from '../models/university';


@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {
  private UnivUrl="http://localhost:9090/univ/"

  constructor(private httpuniversity:HttpClient) { }


  getallUniversities():Observable<university[]>{
    return this.httpuniversity.get<university[]>(this.UnivUrl+'all')

  }
  getnomunivs():Observable<String[]>{
    return this.httpuniversity.get<String[]>(this.UnivUrl+'NameUniv')
 }
  adduniv(university:university,nomuniversity:String):Observable<any>{
      return this.httpuniversity.post<any>(this.UnivUrl+'save'+'/',university)
   }
  deleteuniv(id:number):Observable<String>{
    return this.httpuniversity.delete<String>(this.UnivUrl+id)
  }

}