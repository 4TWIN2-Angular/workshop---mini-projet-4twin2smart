import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';

 





@Component({
  selector: 'app-addmembre',
  templateUrl: './addmembre.component.html',
  styleUrls: ['./addmembre.component.css']
})
export class AddmembreComponent implements OnInit {
 
 
    membre=new membre();
    membre2=new membre();
    nomdeclubs:String[];
    id_membre:number;
    clubassignedto:String;
    updatemembre;
    createthisform(){
    this.updatemembre=new FormGroup({
      nom_M:new FormControl(this.membre.nom_M),
      prenom_M:new FormControl(this.membre.prenom_M),
      email:new FormControl(this.membre.email),
      num_M: new FormControl(this.membre.num_M),
      role:new FormControl(this.membre.role),
    //  club_nom:new FormControl(this.membre.club.nomdeclub)


    })
     
  }
   
  constructor(private membres:MembreserviceService,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.createthisform()
    //console.log(this.clubassignedto)
    this.rout.params.subscribe(data=>{this.id_membre=data['id']
    this.membres.retrievemembre(this.id_membre).subscribe(data=>{this.membre=data,console.log(this.membre),this.createthisform()})})
    console.log(this.id_membre)

    this.membres.getnomclubs().subscribe(data=>{this.nomdeclubs=data
    })
      
      
    
    

  }
  j(){
    console.log("mi")
  
  }
  updatememb(){
    //console.log(this.updatemembre.get('nom_M').value,this.updatemembre.get('prenom_M').value)
    console.log(this.updatemembre)
    this.membre2.id_M=this.membre.id_M
    this.membre2.nom_M=  this.updatemembre.get('nom_M').value;
    this.membre2.prenom_M=  this.updatemembre.get('prenom_M').value;
    this.membre2.email=  this.updatemembre.get('email').value;
    this.membre2.num_M=  this.updatemembre.get('num_M').value;
    this.membre2.role=  this.updatemembre.get('role').value;
    this.membre2.club=this.membre.club
    this.membres.updatemembre(this.membre2).subscribe(data=>{})
    
   // this.updatemembre.reset();
    
 
  }
  

}
