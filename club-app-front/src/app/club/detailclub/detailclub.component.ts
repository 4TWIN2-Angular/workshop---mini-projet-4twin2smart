import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/models/club';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-detailclub',
  templateUrl: './detailclub.component.html',
  styleUrls: ['./detailclub.component.css']
})
export class DetailclubComponent implements OnInit {

  idc: number;
  c :Club;
  form: FormGroup;
  editmode: boolean;
  pattern: "^[ a-zA-Z0-9][a-zA-Z0-9 ]*$";

  constructor(private ActiveRoute: ActivatedRoute, private clubService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.createthisform()
    this.idc = this.ActiveRoute.snapshot.params['id'];
    if (this.idc != null) {
      this.clubService.Retrieveclub(this.idc).subscribe({
        next: (club) => {
          this.c = club;
          console.log('this club :' + this.c)

        },
        error: (err) => {
          console.log("error :" + err)
        }
      });
      this.editmode = true; //update
    }
    this.createthisform();

  }
  createthisform() {

    let nomdeclub = '';
    let specialite = '';
    let date_creation = null;
    let description = '';

    if (this.c != null && this.editmode) {
      nomdeclub = this.c.nomdeclub;
      specialite = this.c.specialite;
      date_creation = this.c.date_creation;
      description = this.c.description;
    }


    this.form = new FormGroup({
      nomdeclub: new FormControl(nomdeclub,[Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]),
      specialite: new FormControl(specialite,Validators.required),
      date_creation: new FormControl(date_creation,Validators.required),
      description: new FormControl(description,Validators.required)
    })
  }
  Back() {
    this.router.navigate(['/club/listClub'])
  }
  submit() {
    if (this.editmode) {
      this.clubService.updateClub(this.idc, this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/club/listClub'])
        }

      })
    }
  }
}
