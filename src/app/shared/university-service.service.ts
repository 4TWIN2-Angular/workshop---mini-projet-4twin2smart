import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { university } from '../models/University';
import { University } from '../university/university';


@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {
  private UnivUrl="http://localhost:9090/univ/"

  constructor(private httpuniversity:HttpClient) { }

  getListUniversity(): Observable<University[]>{
    return this.httpuniversity.get<University[]>('${this.UnivUrl}');
  }

  getallUniversities():Observable<university[]>{
    return this.httpuniversity.get<university[]>(this.UnivUrl+'all')

  }
  getnomclubs():Observable<String[]>{
    return this.httpuniversity.get<String[]>(this.UnivUrl+'NameUniv')
  }
  addmembre(university:university,nomuniversity1:String):Observable<any>{
      return this.httpuniversity.post<any>(this.UnivUrl+'save'+'/',university)
  }
  deletemembre(id:number):Observable<String>{
    return this.httpuniversity.delete<String>(this.UnivUrl+id)
  }

}
