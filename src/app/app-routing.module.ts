
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { ListUniversityComponent } from './university/list-university/list-university.component';
import { UniversityComponent } from './university/university.component';
import { university } from './models/University';

const routes: Routes = [
  {path: '', redirectTo:'Dashbord' , pathMatch:'full' },
  {path:'addUniv',component:AddUniversityComponent},
  {path:'ListUniv',component:ListUniversityComponent},
  {path:'university', component:UniversityComponent},
  //{path:'university',   loadChildren: () => import('./university/university').then(u => u.University)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
