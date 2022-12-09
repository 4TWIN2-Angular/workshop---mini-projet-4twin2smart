import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityServiceService } from 'src/app/shared/university-service.service';
import { University } from '../university';

@Component({
  selector: 'app-details-university',
  templateUrl: './details-university.component.html',
  styleUrls: ['./details-university.component.css']
})
export class DetailsUniversityComponent implements OnInit {
  UnivId: number 
  university : University
  constructor(private route: ActivatedRoute, private universityservice:UniversityServiceService) { }

  ngOnInit(): void {
    this.UnivId = this.route.snapshot.params['UnivId'];

    this.university = new University();
    this.universityservice.getUniversityById(this.UnivId).subscribe( data =>{
      this.university = data;
    })
  }

}
