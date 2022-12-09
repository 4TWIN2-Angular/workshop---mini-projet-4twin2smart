import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { university } from '../models/University';
import { University } from '../university/university';


@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {
  private UnivUrl="http://localhost:9090/Universite"

  constructor(private httpuniversity:HttpClient) { }

  getListUniversity(): Observable<University[]>{
    return this.httpuniversity.get<University[]>(`${this.UnivUrl}`);
  }

  getallUniversities():Observable<university[]>{
    return this.httpuniversity.get<university[]>(`${this.UnivUrl+'/all'}`)

  }
  CreatUniversity(university: University): Observable<university>{
    return this.httpuniversity.post<university>(`http://localhost:9090/Universite/save`, university);
  }

  getUniversityById(UnivId: number) : Observable<University>{
    return this.httpuniversity.get<University>(`${this.UnivUrl}/${UnivId}`);
  }

  updateUniversity(UnivId: number, University: University) : Observable<university> {
    return this.httpuniversity.put<University> (`${this.UnivUrl}/${UnivId}` , University);

  }

  deleteUniversite(UnivId: number ): Observable<University>{
    return this.httpuniversity.delete<University> (`${this.UnivUrl}/${UnivId}`);
  }

}
