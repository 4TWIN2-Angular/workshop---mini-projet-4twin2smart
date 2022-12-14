import { SponsorService } from './../../shared/sponsor.service';
import { Sponsor } from './../../models/sponsor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private formbuilder:FormBuilder,private sponsorService :SponsorService,private route:ActivatedRoute,private router:Router) {
  } 

id:any;
myform:any;
S:Sponsor=new Sponsor();

  ngOnInit(): void {
    this.id=this.route.snapshot.params[`id`];
  this.sponsorService.retrieveSponsor(this.id).subscribe(one=>{this.S=one});
  }
  updateForm(){

    this.sponsorService.updateSponsor(this.S.id,this.S);
    this.router.navigate(['/sponsor']);

  }
}
