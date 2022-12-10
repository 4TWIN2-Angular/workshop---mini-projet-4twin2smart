import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityServiceService } from 'src/app/shared/university-service.service';
import { University } from '../university';

@Component({
  selector: 'app-creat-university',
  templateUrl: './creat-university.component.html',
  styleUrls: ['./creat-university.component.css']
})
export class CreatUniversityComponent implements OnInit {

  university: University = new University();
  myForm : any;
  constructor(private universityservice: UniversityServiceService,
    private router: Router,
     ) { }

  ngOnInit(): void {
    
  }

  saveUniversiy(){
    this.universityservice.CreatUniversity(this.university).subscribe(data =>{
      console.log(data);
      console.log(this.university)
    //this.goToUniversityList();
    })
    error => console.log(this.university);
  }

  goToUniversityList(){
    this.router.navigate(['/University'])

  }

  onSubmit(){
    console.log(this.university);
    this.saveUniversiy();
 
  }

}
