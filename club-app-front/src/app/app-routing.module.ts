import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorComponent } from './sponsor/sponsor.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { AddmembreComponent } from './membre/addmembre/addmembre.component';
import { TablemembreComponent } from './membre/tablemembre/tablemembre.component';
import { EventComponent } from './event/event.component'; 
import { AddeventComponent } from './event/addevent/addevent.component';
import { EventupdateComponent } from './event/eventupdate/eventupdate.component';
import { EventdeleteComponent } from './event/eventdelete/eventdelete.component';
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { ListUniversityComponent } from './university/list-university/list-university.component';

import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
const routes: Routes = [
  {path:'membre',loadChildren:()=>import('./membre/membre.module').then(m=>m.MembreModule)},
  {path:'listmembres',component:TablemembreComponent,},
  {path:'add',component:AddmembreComponent},
  {path:'sponsor',   loadChildren: () => import('./sponsor/sponsor.module').then(m => m.SponsorModule)},

{path: '', redirectTo:'Dashbord' , pathMatch:'full' },


{path:'',loadChildren:()=>import('./event/listevent/listevent.module').then(m=>m.ListeventModule)},
{path:'addevent',component:AddeventComponent},
{path:'event',component:EventComponent},
{path:'eventdelete',component:EventdeleteComponent},
{path:'updateevent/:id_E',component:EventupdateComponent},
{ path: 'club', loadChildren: () => import('./club/club.module').then(m => m.ClubModule) },
{path:'addUniv',component:AddUniversityComponent},
{path:'ListUniv',component:ListUniversityComponent},

{path:'UpdateUniversity/:idUniv',component:UpdateUniversityComponent},
{path:'DetailsUniversity/:idUniv',component:DetailsUniversityComponent},

{path:'university', children:[
  {path:'DetailsUniversity/:idUniv', component: DetailsUniversityComponent},
  {path:'ListUniv',component:ListUniversityComponent},
]
},

{path:'listuniversity',   loadChildren: () => import('./university/list-university/list-university.module').then(u => u.ListUniversityModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
