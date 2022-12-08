import { Component, OnInit } from '@angular/core';
import { University } from './university';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  universities: University[];
  constructor() { }

  ngOnInit(): void {
  }

}
 