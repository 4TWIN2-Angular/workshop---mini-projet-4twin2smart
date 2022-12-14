import { Component, Input, OnInit, Output } from '@angular/core';
import { membre } from 'src/app/models/membre';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detailmembre',
  templateUrl: './detailmembre.component.html',
  styleUrls: ['./detailmembre.component.css']
})
export class DetailmembreComponent implements OnInit {
@Input('element') element:membre;
@Output('hiding') hidedetail = new EventEmitter <{State:Boolean}>();
  constructor() { }

  ngOnInit(): void {
  }


  hideit(){
    this.hidedetail.emit({State:false});
  }
  getcolor(r:String){
    if (r==='President')
      return ' #88d8b0'
      if (r==='Membre')
      return '#2ab7ca'
      else return '#0057e7'
  }
}
