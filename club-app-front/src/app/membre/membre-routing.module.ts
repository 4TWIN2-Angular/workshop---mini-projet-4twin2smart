import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmembreComponent } from './addmembre/addmembre.component';
import { TablemembreComponent } from './tablemembre/tablemembre.component';
const routes: Routes = [
  {path:'listmembres',component:TablemembreComponent,children:[ ]},
  
  {path:'modifier/:id',component:AddmembreComponent},
  {path:'modifiers',component:AddmembreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreRoutingModule { }
