
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgModel   } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { university } from '../../models/University';
import { UniversityServiceService } from '../../shared/university-service.service';
import { University } from '../university';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {
  myForm : any ;
  university: University = new University();
  UnivId: number;
  constructor(private univeresitySevice: UniversityServiceService,
    private route: ActivatedRoute,
    private router : Router) { }

  
  ngOnInit(): void {
    this.UnivId = this.route.snapshot.params['UnivId'];

    this.univeresitySevice.getUniversityById(this.UnivId)
    .subscribe(Data => {
      this.university = Data;
    }, error => console.log(error));
      
    

    this.myForm=new FormGroup({
           
      UnivId:new FormControl('', [Validators.required]),
      UnivName :new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]), 
      emailUniv:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      PhoneUniv: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
      categorieUniv:new FormControl('', [Validators.required]),
      })
  
  }

  onSubmit(){
    this.univeresitySevice.updateUniversity(this.UnivId , this.university ).subscribe( data => {
      
    }
    , error => console.log(error));
  }

    goToUniversityList(){
      this.router.navigate(['/University'])
  
    }
    
    UpdateUniversity(){
         console.log(this.myForm.get("UnivId").value)
       }
}

  
   

  


