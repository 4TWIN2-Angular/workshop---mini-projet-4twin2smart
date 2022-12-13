import { Component, OnInit } from '@angular/core';
import { EventserviceService } from 'src/app/shared/eventservice.service';
import {evenement}from'src/app/models/evenement';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {
  listEvent: any

  constructor(private event:EventserviceService,private route:Router) { }

  ngOnInit(): void {

    //this.get_list_event()
    this.event.get_list_event().subscribe(data=>this.listEvent=data);
    
    
  }


  get_list_event(){
    console.log("zedna")
     //this.event.get_list_event().subscribe(data=>this.listEvent=data);
    
  }

  updateevent(id_E:number){
this.route.navigate(['updateevent',id_E]);
  }
  deleteevent(id_E:number){
    this.event.deleteev(id_E).subscribe(data=>{
      this.get_list_event();
      window.location.reload()
    })
     
    }
  

  }

