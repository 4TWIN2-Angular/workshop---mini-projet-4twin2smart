import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { SponsorComponent } from './sponsor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {path:'', component:SponsorComponent, children:[
  ]},
  {path:'sponsor-add', component:AddSponsorComponent}
  /**{path:'user-add/:id', component:UserReacttiveFormComponent},**/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
