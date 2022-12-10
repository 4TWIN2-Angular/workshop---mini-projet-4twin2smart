import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-input',
  templateUrl: './club-input.component.html',
  styleUrls: ['./club-input.component.css']
})
export class ClubInputComponent implements OnInit {
  @Input() club : Club
  @Output() notification: EventEmitter<Club> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }
  notifyDeleteClub() {
    this.notification.emit(this.club)
  }
}
