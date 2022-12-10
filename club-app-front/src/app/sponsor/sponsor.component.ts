import { SponsorService } from './../shared/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../models/sponsor';
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  listSponsor: Sponsor[]=[]
  constructor(private spS:SponsorService) { }
  getAllSponsors(){
    this.spS.getallsponsor().subscribe(res=>
      { this.listSponsor=res
      });
  }
  ngOnInit(): void {
this.getAllSponsors();
  }
  

  delete(pos:number){
    this.spS.deletesponsor(pos).subscribe(()=>this.spS.getallsponsor().subscribe(res=>this.listSponsor=res));
  
    }

}
