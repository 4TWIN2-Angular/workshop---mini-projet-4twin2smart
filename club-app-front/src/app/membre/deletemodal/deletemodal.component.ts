import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent implements OnInit {
  membre=new membre();
  role1:String;
  nomdeclubs:String[];
  clubassignedto:String

resetini(){
  window.location.reload()
}
  constructor(private members:MembreserviceService,private rout:Router) {
    
   }
  

  ngOnInit(): void {
   this.members.getnomclubs().subscribe(data=>{this.nomdeclubs=data})

  }
  modifiermembre(membre:membre){
    console.log(membre)

  }
  heznilmembre(){
      this.rout.navigate['membre/listemembres']
  }
  addmemb(){
    console.log(this.membre)
  }
  selectit(role :String){
    this.role1=role;
    console.log(this.role1)
}
selectclub(club:String){
  this.clubassignedto=club;
  console.log(this.clubassignedto)
}
savemembre(){
    
  this.membre.role=this.role1
  console.log(this.membre);
  this.members.addmembre(this.membre,this.clubassignedto).subscribe(data=>{console.log(data)
  }

  )
 this.membre=new membre();
 this.role1="";
 this.clubassignedto="";
 
 
 window.close()

 window.location.reload()

}
}
