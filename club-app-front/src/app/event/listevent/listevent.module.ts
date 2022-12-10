import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeventRoutingModule } from './listevent-routing.module';
import { ListeventComponent } from './listevent.component';


@NgModule({
  declarations: [ListeventComponent],
  imports: [
    CommonModule,

    ListeventRoutingModule,
    
  ]
})
export class ListeventModule { }
