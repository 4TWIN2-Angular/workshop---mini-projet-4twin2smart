import { SponsorComponent } from './sponsor/sponsor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmembreComponent } from './membre/addmembre/addmembre.component';
import { TablemembreComponent } from './membre/tablemembre/tablemembre.component';
import { DeletemodalComponent } from './membre/deletemodal/deletemodal.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'listmembres',component:TablemembreComponent,children:[
    {path:'delete',component:DeletemodalComponent}
  ]},
  {path:'add',component:AddmembreComponent},
  {path:'sponsor',   loadChildren: () => import('./sponsor/sponsor.module').then(m => m.SponsorModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
