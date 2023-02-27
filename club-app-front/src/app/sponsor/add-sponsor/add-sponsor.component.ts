import { Data } from './../../../../node_modules/popper.js/index.d';
import { SponsorService } from './../../shared/sponsor.service';
import { Sponsor } from './../../models/sponsor';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { evenement as Event } from 'src/app/models/evenement';
import { EventserviceService } from 'src/app/shared/eventservice.service';
import {NotificationsService} from 'angular2-notifications'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {
  myForm :  FormGroup;
sponsor: Sponsor = new Sponsor();
listEvent: any;

  constructor(private spS:SponsorService, private event:EventserviceService, private notif:NotificationsService, private router:Router) { }

  ngOnInit(): void {
    this.event.get_list_event().subscribe(data=>this.listEvent=data);
    this.createForm(new Sponsor());
    console.log(this.listEvent);
  }


  createForm(sponsor){
    this.myForm=new FormGroup({
      
      email:new FormControl(sponsor.email ,[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      nom : new FormControl(sponsor.labelle,[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      phone: new FormControl(sponsor.phone,[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
      categorie:new FormControl(sponsor.categorieSponsor, [Validators.required]),
      montant:new FormControl(sponsor.montant, [Validators.required]),
      })
    
  }


save(){

  this.sponsor.email= this.myForm.get('email').value;
  this.sponsor.labelle= this.myForm.get('nom').value;
  this.sponsor.categorieSponsor=this.myForm.get('categorie').value;
  this.sponsor.phone=this.myForm.get('phone').value;
  this.sponsor.montant=this.myForm.get('montant').value;
  if(this.spS.addsponsor(this.sponsor).subscribe()  ){
    this.notif.success(
      'Ajout avec succés',
      'votre Sponsor est ajouter avec succés',
      {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
      }
    )
    this.myForm.reset();
  }

  
    this.router.navigate(['/sponsor']);
  

}
  
}
