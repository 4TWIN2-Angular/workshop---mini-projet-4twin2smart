import { SponsorService } from './../shared/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../models/sponsor';
import {  Router } from '@angular/router';
import {style} from'./style/style'
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  listSponsor: Sponsor[]=[]
  constructor(private spS:SponsorService,private route:Router) { }
  getAllSponsors(){
    this.spS.getallsponsor().subscribe(res=>
      { this.listSponsor=res
      });
  }
  ngOnInit(): void {
this.getAllSponsors();
  }
  update(pos:number){
    this.route.navigate(['sponsor/update',pos])


  }
  categoriecolor(categorie:string){
    return style.colorcategorie(categorie);
   }

  delete(pos:number,i:number){
    this.spS.deletesponsor(pos).subscribe(()=>this.spS.getallsponsor().subscribe(res=>this.listSponsor=res));
    this.listSponsor.splice(i,1);
  
    }

}
