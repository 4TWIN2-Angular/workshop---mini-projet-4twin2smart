import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUniversityRoutingModule } from './list-university-routing.module';
import { ListUniversityComponent } from './list-university.component';
import { UpdateUniversityComponent } from '../update-university/update-university.component';
import { DetailsUniversityComponent } from '../details-university/details-university.component';
import { DeletUniversityComponent } from '../delet-university/delet-university.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeuniversityPipe } from '../pipeuniversity.pipe';
import { AddUniversityComponent } from '../add-university/add-university.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ListUniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class ListUniversityModule { }
