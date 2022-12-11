import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmembreComponent } from './addmembre/addmembre.component';
import { DeletemodalComponent } from './deletemodal/deletemodal.component';
import { DetailmembreComponent } from './detailmembre/detailmembre.component';
import { MailComponent } from './mail/mail.component';
import { TablemembreComponent } from './tablemembre/tablemembre.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {path:'listmembres',component:TablemembreComponent,children:[ 
  // {path:'sending/:id',component:MailComponent}
   //{path:'ajoutermembre',component:DeletemodalComponent},
  
  ]},
  
  {path:'modifier/:id',component:AddmembreComponent,children:[
    {path:'tests',component:TestComponent}
  ]},
  {path:'modifiers',component:AddmembreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreRoutingModule { }
