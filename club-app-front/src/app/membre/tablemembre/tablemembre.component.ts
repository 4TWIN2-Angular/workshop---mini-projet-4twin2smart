import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-tablemembre',
  templateUrl: './tablemembre.component.html',
  styleUrls: ['./tablemembre.component.css']
})
export class TablemembreComponent implements OnInit {
  membre2=new membre();
  lawej:String;
  listmembres:membre[];
 @Output() ajouterget = new EventEmitter 
  
  constructor(private membreservice:MembreserviceService) { }
  @Output() 
  ngOnInit(): void {
    this.membreservice.getallmembres().subscribe(data=>{this.listmembres=data
    console.log(this.listmembres)
    })
    this.lawej=""
    
  }
  getcolormembre(r :String){
      if (r==='President')
      return ' #88d8b0'
      if (r==='Membre')
      return '#2ab7ca'
      else return '#0057e7'
  }
  deletemembre1(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          
          'Deleted!',
        'Your file has been deleted.',
          'success',
          setTimeout(() => {
            this.deletemembre(id),
          window.location.reload()
          }, 3000),
          
        )
      }
    })
  }
  deletemembre(id:number){
    console.log(id);
      this.membreservice.deletemembre(id).subscribe(data=>{console.log(data)
      })
   
     

  }

}
