import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityServiceService } from 'src/app/shared/university-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-university',
  templateUrl: './list-university.component.html',
  styleUrls: ['./list-university.component.css']
})
export class ListUniversityComponent implements OnInit {

  universities: University[];
  constructor(private UniversityServiceservice : UniversityServiceService,
    private router: Router ) { }

  ngOnInit(): void {


//     this.universities = [];

    this.getUniversities();

    
  }

  private getUniversities(){
    this.UniversityServiceservice.getallUniversities().subscribe(data=> {
      console.log(data);
      this.universities = data;
    })
  }

  UpdateUniversity(UnivId:number){
    this.router.navigate(['UpdateUniversity',UnivId]);

  }
  deleteUniversite(UnivId:number){
    console.log(UnivId)
    this.UniversityServiceservice.deleteUniversite(UnivId).subscribe (data =>{
        console.log(data);
        this.getUniversities();
    })
  

  }
 
  detailsUniversite(UnivId:number){
    this.router.navigate(['DetailsUniversity',UnivId]);

  }

  }

 
  

  

