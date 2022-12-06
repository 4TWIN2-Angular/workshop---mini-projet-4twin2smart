import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgModel   } from '@angular/forms';
import { university } from 'src/app/models/university';

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.css']
})
export class AddUniversityComponent implements OnInit {
  myForm : any ;
  University =new university();
 
   constructor(){
 
   // this.myForm=this.formbuilder.group
  //  ({
  //     UnivId : ['', [Validators.required]],
  //     UnivName : ['',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]],
  //     emailUniv:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]],
  //     PhoneUiv: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]],
  //     categorie:['', [Validators.required]],
  //     })
  }

  ngOnInit(): void {
  
  }

  saveUniversity(){
    console.log(this.myForm.get("UnivId").value)
  }

  selected(role:any){
   

  }
}

