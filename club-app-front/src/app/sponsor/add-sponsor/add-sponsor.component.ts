import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {
  myForm :  FormGroup;

 
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      nom : new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      phone: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
      categorie:new FormControl('', [Validators.required]),
      })
    
  }


  


save(){}
  
}
