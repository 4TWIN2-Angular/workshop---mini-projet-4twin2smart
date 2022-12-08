import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityServiceService } from 'src/app/shared/university-service.service';

@Component({
  selector: 'app-list-university',
  templateUrl: './list-university.component.html',
  styleUrls: ['./list-university.component.css']
})
export class ListUniversityComponent implements OnInit {

  universities: University[];
  constructor(private UniversityServiceservice : UniversityServiceService ) { }

  ngOnInit(): void {

    // this.universities = [{
    //   "UnivId":1234,
    //   "emailUniv":"esprit@gmail.com",
    //   "UnivName":"Esprit",
    //   "CategorieUniv":"privée",
    //   "AdressUniv":"elGazella",
    //   "PhoneUniv": "71 345 234"
    // },
    // {
    // "UnivId":6478,
    // "emailUniv":"ESB@gmail.com",
    // "UnivName":"ESB",
    // "CategorieUniv":"privée",
    // "AdressUniv":"elGazella",
    // "PhoneUniv": "71 305 284"

      
    // }];

    this.getUniversities();

    
  }

  private getUniversities(){
    this.UniversityServiceservice.getListUniversity().subscribe(data=> {
      this.universities = data;
    })
  }

}
