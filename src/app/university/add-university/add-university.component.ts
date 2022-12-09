
import { UniversityServiceService } from 'src/app/shared/university-service.service'; 
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgModel   } from '@angular/forms';
import { university } from 'src/app/models/University';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
  myForm : any ;
  university: UniversityServiceService;
  University =new university();
 
   constructor(){
 
    // this.myForm=this.formbuilder.group({

    //   UnivName : ['',[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]],
    //   emailUniv:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]],
    //   PhoneUiv: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]],
    //   categorie:['', [Validators.required]],
    //   })
  }

  ngOnInit(): void {
    this.myForm=new FormGroup({
           
      UnivId:new FormControl('', [Validators.required]),
      UnivName :new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]), 
      emailUniv:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      PhoneUniv: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
      categorieUniv:new FormControl('', [Validators.required]),
      })
  
  }

  saveUniversity(){
    console.log(this.myForm.get("UnivId").value)

  }

  selected(role:any){
   

  }
}
