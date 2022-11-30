import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../models/sponsor';
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  listSponsor: Sponsor[]=[]
  constructor() { }

  ngOnInit(): void {

  }
  

}
