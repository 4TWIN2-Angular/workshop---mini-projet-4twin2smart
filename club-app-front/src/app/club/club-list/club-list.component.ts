import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  listeclubs: Club[];
  tests: string;
  SearchedClub: string
  constructor(private clubservice: ServiceService) { }

  ngOnInit(): void {
    // this.clubservice.getAllclubs().subscribe(data=>{this.listeclubs=data
    //   console.log(this.listeclubs)
    //   })
    //   this.tests=""
    this.clubservice.getAllclubs().subscribe({
      next: (data) => {
        this.listeclubs = data;

      },
      error: (err) => {
        console.log('err' + err);
      }
    })
  }

  DeleteClub(id: number, i: number) {
    console.log(id);
    this.clubservice.DeleteClub(id).subscribe({
      next: () => {
        this.listeclubs.splice(i, 1);
      }, error: (err) => {
        console.log("err" + err);
      }
    })
    window.location.reload();
  }
  
  
}
