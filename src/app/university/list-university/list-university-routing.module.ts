import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversityComponent } from '../add-university/add-university.component';
import { DetailsUniversityComponent } from '../details-university/details-university.component';
import { UpdateUniversityComponent } from '../update-university/update-university.component';
import { ListUniversityComponent } from './list-university.component';

const routes: Routes = [
  {path: '', component:ListUniversityComponent},
  {path:'addUniv',component:AddUniversityComponent},
  {path:'ListUniv',component:ListUniversityComponent},
  
  {path:'UpdateUniversity/:idUniv',component:UpdateUniversityComponent},
  {path:'DetailsUniversity/:idUniv',component:DetailsUniversityComponent},

  {path:'university', children:[
    {path:'DetailsUniversity/:idUniv', component: DetailsUniversityComponent},
    {path:'ListUniv',component:ListUniversityComponent},
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUniversityRoutingModule { }
