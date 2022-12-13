import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  listeclubs: Club[];
  SearchedClub: string
  constructor(private clubservice: ServiceService, private toastr: ToastrService) { }

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
    if (confirm("Are you sure you want to delete?")) {
      this.clubservice.DeleteClub(c.id_club).subscribe()
      this.listeclubs.splice(i, 1);
      this.toastr.success('club Added with Success', 'Success');
    }

  }

}
