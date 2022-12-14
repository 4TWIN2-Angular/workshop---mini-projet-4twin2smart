import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeventRoutingModule } from './listevent-routing.module';
import { ListeventComponent } from './listevent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListeventComponent],
  imports: [
    CommonModule,

    ListeventRoutingModule,
    FormsModule
  ]
})
export class ListeventModule { }
