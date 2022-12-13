import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityServiceService } from 'src/app/shared/university-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-university',
  templateUrl: './list-university.component.html',
  styleUrls: ['./list-university.component.css']
})
export class ListUniversityComponent implements OnInit {
  universities:University[];
   sear:String;

  // universities: University[];
  constructor(private UniversityServiceservice : UniversityServiceService,
    private router: Router) { }

  ngOnInit(): void {

     this.sear=""
     this.universities = [];

     this.getUniversities();

    
   }

   private getUniversities(){
     this.UniversityServiceservice.getallUniversities().subscribe(data=> {
       console.log(data);
       this.universities = data;
     })
   }


   UpdateUniversity(UnivId:number){
    this.router.navigate(['UpdateUniversity',UnivId]);
    console.log('error');
  }


  
  
    deleteUniversite(idUniv: number){
       console.log(idUniv),
      
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
         this.UniversityServiceservice.deleteUniversite(idUniv).subscribe (data =>{
           console.log(data);
          // this.getUniversities();      
    })
         Swal.fire(
           'Deleted!',
           'Your file has been deleted.',
           'success',
          
         )
         window.location.reload();
       }
     })
    
   }


  
   detailsUniversite(UnivId:number){
     this.router.navigate(['DetailsUniversity',UnivId]);

   }

  
}
 
  

  

