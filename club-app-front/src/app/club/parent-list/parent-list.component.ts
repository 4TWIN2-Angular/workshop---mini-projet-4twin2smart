import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { ServiceService } from 'src/app/shared/service.service';
import { customStyle } from '../utils/customStyle';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  listeclubs: Club[];
  SearchedClub: string
  constructor(private clubservice: ServiceService) { }

  ngOnInit(): void {
    this.clubservice.getAllclubs().subscribe({
      next: (data) => {
        this.listeclubs = data;

      },
      error: (err) => {
        console.log('err' + err);
      }
    })
  }
  DeleteClub(c: Club, i: number) {
    console.log(i);
    this.clubservice.DeleteClub(c.id_club).subscribe({
      next: () => {
        this.listeclubs.splice(i, 1);

      }, error: (err) => {
        console.log("err" + err);
      }
    })
     window.location.reload();
  }
  
}
