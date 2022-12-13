import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { university} from '../models/university';
import { University } from '../university/university';
import { UniversityComponent } from '../university/university.component';


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
    return this.httpuniversity.post<university>(`${this.UnivUrl+'/save'}`, university);
  }

  getUniversityById(UnivId: number) : Observable<University>{
    return this.httpuniversity.get<University>(`${this.UnivUrl}/${UnivId}`);
  }

  updateUniversity(idUniv: number, University: University) : Observable<university> {
    return this.httpuniversity.put<University> (`${this.UnivUrl}/${idUniv}` , University);

  }

  deleteUniversite(UnivId: number ): Observable<University>{
    return this.httpuniversity.delete<University> (`${this.UnivUrl}/${UnivId}`);
  }

}
