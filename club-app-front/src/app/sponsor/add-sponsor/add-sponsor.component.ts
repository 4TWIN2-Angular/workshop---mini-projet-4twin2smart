import { SponsorService } from './../../shared/sponsor.service';
import { Sponsor } from './../../models/sponsor';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { evenement as Event } from 'src/app/models/evenement';
@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {
  myForm :  FormGroup;
sponsor: Sponsor= new Sponsor();
listEvent: Event[]=[];

  constructor(private spS:SponsorService) { }
  getAllEvent(){
    this.spS.getallevent().subscribe(res=>
      { 
        
        this.listEvent=res
        console.log(res)
      });
  }
  ngOnInit(): void {
    this.getAllEvent();
    this.createForm(new Sponsor());
    console.log(this.listEvent);
  }


  createForm(sponsor){
    this.myForm=new FormGroup({
      
      email:new FormControl(sponsor.email ,[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      nom : new FormControl(sponsor.labelle,[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      phone: new FormControl(sponsor.phone,[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
      categorie:new FormControl(sponsor.categorieSponsor, [Validators.required]),
      })
    
  }


save(){

  this.sponsor.email= this.myForm.get('email').value;
  this.sponsor.labelle= this.myForm.get('nom').value;
  this.sponsor.categorieSponsor=this.myForm.get('categorie').value;
  this.sponsor.phone=this.myForm.get('phone').value;
this.spS.addsponsor(this.sponsor).subscribe();

this.myForm.reset();


}
  
}
