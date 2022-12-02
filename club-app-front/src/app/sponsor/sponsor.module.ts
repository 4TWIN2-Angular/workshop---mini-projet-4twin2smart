import { Sponsor } from './../models/sponsor';
import { SponsorService } from '../shared/sponsor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorRoutingModule } from './sponsor-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';


@NgModule({
  declarations: [
AddSponsorComponent
  
  ],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[SponsorService]
})
export class SponsorModule { }
