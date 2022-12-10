import { Component, OnInit } from '@angular/core';
import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';

@Component({
  selector: 'app-tablemembre',
  templateUrl: './tablemembre.component.html',
  styleUrls: ['./tablemembre.component.css']
})
export class TablemembreComponent implements OnInit {
  lawej:String;
  listmembres:membre[];
  constructor(private membreservice:MembreserviceService) { }

  ngOnInit(): void {
    this.membreservice.getallmembres().subscribe(data=>{this.listmembres=data
    console.log(this.listmembres)
    })
    this.lawej=""
    
  }

  

}
