import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './club.component';
import { ClubAddComponent } from './club-add/club-add.component';
import { ClubListComponent } from './club-list/club-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailclubComponent } from './detailclub/detailclub.component';
import { ClubInputComponent } from './club-input/club-input.component';



@NgModule({
  declarations: [
    ClubComponent,
    ClubAddComponent,
    ClubListComponent,
    DetailclubComponent,
    ClubInputComponent
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class ClubModule { }
