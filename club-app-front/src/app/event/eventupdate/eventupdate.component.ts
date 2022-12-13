import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { evenement } from 'src/app/models/evenement';

import { EventserviceService } from 'src/app/shared/eventservice.service';
import Swal from 'sweetalert2';


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

 swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

Test(){
  this.swalWithBootstrapButtons.fire({
    title: 'sure?',
    text: "pas d'acces pour le retour !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'modifié!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.swalWithBootstrapButtons.fire(
        '!Modifier',
        'formulaire modifié.',
        'success'
      )
      this.event.modifier_event(this.E,this.id_E).subscribe();
      this.gotoeventlist();
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      this.swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

}
