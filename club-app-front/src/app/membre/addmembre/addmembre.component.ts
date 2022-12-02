import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';

@Component({
  selector: 'app-addmembre',
  templateUrl: './addmembre.component.html',
  styleUrls: ['./addmembre.component.css']
})
export class AddmembreComponent implements OnInit {

    membre=new membre();
    role1:String;
    nomdeclubs:String[];
    clubassignedto:String;
    testini=true;
    @ViewChild('houaform') houaform ;
   
  constructor(private membres:MembreserviceService) { }

  ngOnInit(): void {
    this.membres.getnomclubs().subscribe(data=>{this.nomdeclubs=data
    console.log(this.nomdeclubs)})
    console.log(this.clubassignedto)

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
    this.membres.addmembre(this.membre,this.clubassignedto).subscribe(data=>{console.log(data)
    }

    )
   this.membre=new membre();
   this.role1="";
   this.clubassignedto="";
 
  }
  checkmembreclub(club:String){
    if (club==null){
      return false
    }
    else{
      return true;
    }
  }

}
