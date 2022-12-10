import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversityComponent } from './list-university.component';

const routes: Routes = [
  {path: '', component:ListUniversityComponent},
  {path:'ListUniv',component:ListUniversityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUniversityRoutingModule { }
