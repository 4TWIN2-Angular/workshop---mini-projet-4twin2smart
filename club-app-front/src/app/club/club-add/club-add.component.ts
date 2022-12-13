
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-club-add',
  templateUrl: './club-add.component.html',
  styleUrls: ['./club-add.component.css']
})

export class ClubAddComponent implements OnInit {

  c: Club;
  idc: number;
  form: FormGroup;
  editmode: boolean;
  pattern: "^[ a-zA-Z0-9][a-zA-Z0-9 ]*$";
  specialite:any = [{value:"IT"},{value:"Music"},{value:"Sport"},{value:"Santé"}]

  constructor(
    private clubservice: ServiceService,
    private router: Router,
    private ActiveRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.createthisform();

    this.idc = this.ActiveRoute.snapshot.params['id'];
    if (this.idc != null) {
      this.editmode = true; //update
      this.clubservice.Retrieveclub(this.idc).subscribe({
        next: (club: Club) => {
          this.c = club;
          console.log('this club :' + this.c.nomdeclub)
          this.createthisform();

        },
        error: (err) => {
          console.log("error :" + err)
        }
      });
    }
    else {
      this.editmode = false; //add

    }

  }

  private createthisform() {

    let nomdeclub = '';
    let specialite= this.specialite;
    let date_creation = null;
    let description = '';
    if (this.editmode) {

      nomdeclub = this.c.nomdeclub;
      specialite = this.c.specialite;
      date_creation = this.c.date_creation;
      description = this.c.description;
    }

    this.form = new FormGroup({
      'nomdeclub': new FormControl(nomdeclub, [Validators.required, Validators.pattern(this.pattern), Validators.minLength(2)]),
      'specialite': new FormControl(specialite, Validators.required),
      'date_creation': new FormControl(date_creation, Validators.required),
      'description': new FormControl(description, Validators.required)
    })
  }


  Back() {
    this.toastr.info('Back to Clubs List', 'Cancel');
    this.router.navigate(['/club/listClub'])
  }

  submit(form:any) {
    console.log('editmode: '+this.editmode)
    if (this.editmode) {
      this.clubservice.updateClub(form,this.c.id_club).subscribe({
        next: () => {
          console.log("error :" + this.form.value)
          this.toastr.success('club Updated with Success', 'Success');
          this.router.navigate(['/club/listClub'])
        }

      })
    }
    else {
      this.clubservice.addClub(form).subscribe({
        next: () => {
          console.log('club :' + this.c)
          this.toastr.success('club Added with Success', 'Success');

          this.router.navigate(['/club/listClub'])
        }
      })
    }
  }
}