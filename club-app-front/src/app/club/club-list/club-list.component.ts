import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { customStyle } from '../utils/customStyle';


@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

 
  @Input() club  : Club 
  @Input() SearchedClub :string
  @Output() notification: EventEmitter<Club> = new EventEmitter()
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  
  }

  getTextcolorspecialite(s:string){
   return customStyle.getTextcolorspecialite(s)
  }

  notifyDelete() {
    this.notification.emit(this.club)
  }
  

  
}
