import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgModel   } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { university } from 'src/app/models/university';
import { UniversityServiceService } from 'src/app/shared/university-service.service';
import { University } from '../university';

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.css']
})
export class AddUniversityComponent implements OnInit {
  univ :University;
  myForm :  FormGroup;
  idUniv : Number;
  //University =new this.University;
  universityService: UniversityServiceService;
  editmode: boolean;
  
 
 
  constructor(private universityservice: UniversityServiceService,
    private router: Router, private fb : FormBuilder,
    private ActiveRoute: ActivatedRoute,
     ) { 

    
     }
   
     
       ngOnInit(): void {
        //  this.myForm= this.fb.group({

        //   nomUniv :['',Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")], 
        //     emailUniv:['',Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")],
        //     phoneUniv: ['',Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")],
        //     univCategories:['', Validators.required],
           
        //  })
         this.createMyForm()
         this.idUniv = this.ActiveRoute.snapshot.params['idUniv'];
         if (this.idUniv != null) {
           this.universityservice.CreatUniversity(this.univ).subscribe({
             next: (university) => {
               this.univ= university;
               console.log('this club :' + this.univ)
     
             },
             error: (err) => {
               console.log("error :" + err)
             }
           });
           this.editmode = true; //update
         }
         else {
           this.editmode = false; //add
         }
         this.createMyForm();
     
       }
     
       createMyForm() {
   
    
     
         let nomUniv = '';
         let adresseUniv = '';
         let emailUniv = '';
         let phoneUniv = '';
         let univCategories = '';
     
        //  if (this.univ != null && this.editmode==true) {
        //   nomUniv = this.univ. nomUniv;
        //   emailUniv = this.univ. emailUniv;
        //   adresseUniv = this.univ. adresseUniv;
        //   phoneUniv = this.univ.phoneUniv;
        //   univCategories = this.univ.univCategories;
          
        //  }
     
     
         this.myForm = new FormGroup({
          nomUniv: new FormControl(nomUniv,[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]),
          emailUniv: new FormControl(emailUniv,[Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
          phoneUniv: new FormControl(phoneUniv,[Validators.required,Validators.minLength(8),Validators.maxLength(8), Validators.pattern("[0-9]*")]),
          adresseUniv: new FormControl(adresseUniv,Validators.required),
          univCategories: new FormControl(univCategories,Validators.required)

         })
       }
       Back() {
         this.router.navigate(['/ListUniv'])
       }
     
       submit() {
         if (this.editmode==true) {
           this.universityService.updateUniversity(this.univ.idUniv, this.myForm.value).subscribe({
             next: () => {
               this.router.navigate(['/ListUniv'])
             }
     
           })
         }
         else 
         {
           this.universityservice.CreatUniversity(this.myForm.value).subscribe({
             next: () => {
               console.log('University :' + this.univ)
               this.router.navigate(['/ListUniv'])
             }
           })
         }
       }

          
      }

