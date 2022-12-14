
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgModel   } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { university } from '../../models/University';
import { UniversityServiceService } from '../../shared/university-service.service';
import { University } from '../university';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {
  myForm : any ;
  univ:University;
  UnivId: number;

  style1:"red"
  style2:"30px"
  style3:"underline"
  
  constructor(private univeresitySevice: UniversityServiceService,
    private route: ActivatedRoute,
    private router : Router) { }

    
  ngOnInit(): void {

    this.UnivId = this.route.snapshot.params['idUniv'];

    this.univeresitySevice.getUniversityById(this.UnivId)
    .subscribe(Data => {
      
      this.univ = Data;
      console.log (this.univ)
      console.log (Data)
    });
      
    

    // this.myForm=new FormGroup({
           
    //   // UnivId:new FormControl('', [Validators.required]),
    //   nomUniv :new FormControl(this.univ.nomUniv,[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]), 
    //   emailUniv:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
    //   phoneUniv: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
    //   univCategories:new FormControl('', [Validators.required]),
    //   adresseUniv: new FormControl('',Validators.required),
    //   })
     
    
  }

  onSubmit(){
    //console.log("hhhh"+this.univ)
    this.univeresitySevice.updateUniversity(this.UnivId , this.univ ).subscribe(data=>console.log(data));
    this.router.navigate(['/ListUniv'])
  }

    goToUniversityList(){
      this.router.navigate(['/ListUniv'])
  
    }
    
    UpdateUniversity(){
    
         console.log(this.myForm.get("idUniv").value)
         Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
        
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            //  this.univeresitySevice.updateUniversity(this.univ)
            console.log("hhh",this.univ)
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
       }



}

  
   

  


