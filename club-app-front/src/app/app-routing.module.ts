import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmembreComponent } from './membre/addmembre/addmembre.component';
import { DeletemodalComponent } from './membre/deletemodal/deletemodal.component';
import { TablemembreComponent } from './membre/tablemembre/tablemembre.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'listmembres',component:TablemembreComponent,children:[
    {path:'delete/:id',component:DeletemodalComponent}
  ]},
  {path:'add',component:AddmembreComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
