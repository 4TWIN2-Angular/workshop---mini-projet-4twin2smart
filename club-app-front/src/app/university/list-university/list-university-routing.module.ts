import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listUniversityComponent } from './list-university.component';

const routes: Routes = [
  {path: '', component:listUniversityComponent},
  {path:'ListUniv',component:listUniversityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUniversityRoutingModule { }
