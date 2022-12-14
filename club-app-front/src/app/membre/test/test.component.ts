import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mailingcontent } from 'src/app/models/mailing';
import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {
  s1: Subscription;
  s2:Subscription;
  s3:Subscription

  constructor(private memb:MembreserviceService,private Rout:ActivatedRoute,private r:RouterOutlet) { }
  ngOnDestroy(): void {
    this.s1.unsubscribe();
    this.s2.unsubscribe();
    this.s3.unsubscribe();
  }
ida:number;
m:membre;

listmails:Mailingcontent[];
  ngOnInit(): void {

       this.ida=this.Rout.parent.snapshot.params['id'];
       this.memb.gethistory(this.ida).subscribe(data=>this.listmails=data)
      
    
    
    }
  }


