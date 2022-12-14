import { Component, OnInit } from '@angular/core';
import { EventserviceService } from 'src/app/shared/eventservice.service';
import { evenement } from 'src/app/models/evenement';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {
  listEvent: any
  searchevent: number
  event: evenement = new evenement();

  constructor(private events: EventserviceService, private route: Router) { }

  ngOnInit(): void {

    //this.get_list_event()
    this.events.get_list_event().subscribe(data => this.listEvent = data);


  }


  get_list_event() {
    console.log("zedna")
    //this.event.get_list_event().subscribe(data=>this.listEvent=data);

  }

  updateevent(id_E: number) {
    this.route.navigate(['updateevent', id_E])
    //this.route.navigate(['updateevent',id_E]);
  }
  /* deleteevent(id_E:number){
     this.events.deleteev(id_E).subscribe(data=>{
       this.get_list_event();
       Swal.fire('etes vous sure pour la suppression')
       window.location.reload()
     })
      
     }
    
     */
  deleteevent(id_E: number, i: number) {
    if (confirm("are you sure you want to delete ?")) {

      this.events.deleteev(id_E).subscribe()
      this.listEvent.splice(i, 1);
      Swal.fire('Deleted!')
    }
  }

}

