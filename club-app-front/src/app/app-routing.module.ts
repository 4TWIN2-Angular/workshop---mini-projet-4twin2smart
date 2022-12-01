import { SponsorComponent } from './sponsor/sponsor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'sponsor', component:SponsorComponent},
  {path:'club', component:ClubComponent},
  { path: 'club', loadChildren: () => import('./club/club.module').then(m => m.ClubModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
