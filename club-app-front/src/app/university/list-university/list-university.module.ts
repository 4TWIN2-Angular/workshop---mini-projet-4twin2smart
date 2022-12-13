import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUniversityRoutingModule } from './list-university-routing.module';
import { listUniversityComponent } from './list-university.component';


@NgModule({
  declarations: [
    listUniversityComponent
  ],
  imports: [
    CommonModule,
    ListUniversityRoutingModule
  ]
})
export class ListUniversityModule { }
