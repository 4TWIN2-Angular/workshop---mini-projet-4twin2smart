import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { evenement } from 'src/app/models/evenement';

import { EventserviceService } from 'src/app/shared/eventservice.service';


@Component({
  selector: 'app-eventupdate',
  templateUrl: './eventupdate.component.html',
  styleUrls: ['./eventupdate.component.css']
})
export class EventupdateComponent implements OnInit {


 id_E:any
  
  
  
  myform:any;
  

 E:evenement=new evenement();

  constructor(private formbuilder:FormBuilder,private event :EventserviceService,private route:ActivatedRoute,private router:Router) { 
   
    
  
   
}
ngOnInit(): void {
 

  this.id_E=this.route.snapshot.params[`id_E`];
  this.event.getbyid(this.id_E).subscribe(data=>{this.E=data}
    ),
    errors=>console.log('errors')
   

 
 
}


  
  
  
 


onsubmit(){
this.event.modifier_event(this.E,this.id_E).subscribe();

this.gotoeventlist();



}

gotoeventlist(){
  this.router.navigate(['/listevent']);
}

}
