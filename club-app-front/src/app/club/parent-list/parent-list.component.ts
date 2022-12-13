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
  DeleteClub(c: Club,i:number) {
    console.log(c.id_club);
    if (confirm("are you sure want to delete ?")) {
      this.clubservice.DeleteClub(c.id_club).subscribe({
        next: () => {


        }, error: (err) => {
          console.log("err" + err);
        }
      })
      this.toastr.success('club deleted with success', 'Success');
      this.listeclubs.splice(i,1);
      // window.location.reload();
    }

  }

}
