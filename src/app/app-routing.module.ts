
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { ListUniversityComponent } from './university/list-university/list-university.component';
import { UniversityComponent } from './university/university.component';
import { university } from './models/University';

import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListUniversityModule } from './university/list-university/list-university.module';

const routes: Routes = [
  {path: '', redirectTo:'Dashbord' , pathMatch:'full' },
  {path:'addUniv',component:AddUniversityComponent},
  {path:'ListUniv',component:ListUniversityComponent},
  
  {path:'UpdateUniversity/:UnivId',component:UpdateUniversityComponent},
  {path:'DetailsUniversity/:UnivId',component:DetailsUniversityComponent},

  {path:'university', children:[
    {path:'DetailsUniversity/:UnivId', component: DetailsUniversityComponent},
    {path:'ListUniv',component:ListUniversityComponent},
  ]
  },
  

 // {path:'listuniversity',   loadChildren: () => import('./listuniversity/ListUniversity.Module').then(u => u.University)}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
