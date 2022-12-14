import { BuiltinMethod } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { evenement } from 'src/app/models/evenement';

import { EventserviceService } from 'src/app/shared/eventservice.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  E: evenement = new evenement();
  style1 = "black"
  style2 = "30px"


  constructor(private event: EventserviceService, private route: Router) { }
  // add() {
  //   //let data=f.value
  //   console.log(this.E)
  // }

  ngOnInit(): void {

  }

 
  ajouter_event() {
    this.event.ajouter_event(this.E).subscribe();
    this.route.navigate(['/listevent']);

  }
 
}
