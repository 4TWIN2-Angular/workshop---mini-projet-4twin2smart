import { Component, OnInit } from '@angular/core';
import { Club } from '../models/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  listClub:Club[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
