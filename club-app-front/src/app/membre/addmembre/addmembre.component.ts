import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'






@Component({
  selector: 'app-addmembre',
  templateUrl: './addmembre.component.html',
  styleUrls: ['./addmembre.component.css']
})
export class AddmembreComponent implements OnInit {
  @Output() s =new EventEmitter<{m:membre}>();
    rola:String;
    nom:String;
    prenom:String;
    membre=new membre();
    membre2=new membre()
    nomdeclubs:String[];
    id_membre:number;
    clubassignedto:String;
    updatemembre;
    createthisform(){
    this.updatemembre=new FormGroup({
      nom_M:new FormControl(this.membre.nom_M,[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      prenom_M:new FormControl(this.membre.prenom_M,[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      email:new FormControl(this.membre.email,[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com|^[a-zA-Z0-9._-]+@+[a-z]*.tn")]),
      num_M: new FormControl(this.membre.num_M,[Validators.required,Validators.pattern("[2]{1}[0-9]{1}[0-9]{6}|[9]{1}[0-9]{1}[0-9]{6}|[5]{1}[0-9]{1}[0-9]{6}")]),
      role:new FormControl(this.membre.role,[Validators.required]),
    //  club_nom:new FormControl(this.membre.club.nomdeclub)
      

    })
     
  }
   
  constructor(private membres:MembreserviceService,private rout:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.createthisform()
    //console.log(this.clubassignedto)
    this.rout.params.subscribe(data=>{this.id_membre=data['id']
    this.membres.retrievemembre(this.id_membre).subscribe(data=>{this.membre=data,console.log(this.membre),this.createthisform(),   this.nom=this.membre.nom_M
      this.prenom=this.membre.prenom_M,this.rola=this.membre.role})})
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
   
   // this.updatemembre.reset();
   console.log(this.membre2);
   
   Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.route.navigate['../listmembres']

      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        
      }
      
      )
      this.membres.updatemembre(this.membre2).subscribe(()=>{console.log('rani nemchi'),this.route.navigate(['/listmembres'])}
      );
      


     
      
     

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info'),
      this.membre2= new membre();
      this.route.navigate(['/listmembres'])

    }
  })
  
   }
    

   getcolor(r:String){
    if (r==='President')
      return ' #88d8b0'
      if (r==='Membre')
      return '#2ab7ca'
      else return '#0057e7'
  }
}
