import { Component, Inject, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent implements OnInit {
  membre=new membre();
 
  nomdeclubs:String[];
  clubassignedto:String;
  hia:String
  jarebni(){
    console.log(this.membre)
    console.log(this.clubassignedto)
  }
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
 
savemembre1(){
  this.savemembre()
  Swal.fire(
   
    
    'Done!',
    'Membre est ajotuée !',
    'success',  
   //splice
  )
}

savemembre(){
    
 
  console.log(this.membre);
  this.members.addmembre(this.membre,this.clubassignedto).subscribe(data=>{console.log(data)
    
  
  }

  )
  
 this.membre=new membre();
 
 this.clubassignedto="";
 
 window.close()

 window.location.reload()

}
// j(){
//   this.tostr.success('adding membre is done!','Added',{
//     disableTimeOut:false,
//     timeOut: 3000,
//     positionClass:'toast-top-full-width',
//     progressBar:true,
//     progressAnimation:'decreasing'
  
  
//   });

// }
}
