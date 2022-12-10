import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUniversityRoutingModule } from './list-university-routing.module';
import { ListUniversityComponent } from './list-university.component';


@NgModule({
  declarations: [
    ListUniversityComponent
  ],
  imports: [
    CommonModule,
    ListUniversityRoutingModule
  ]
})
export class ListUniversityModule { }
