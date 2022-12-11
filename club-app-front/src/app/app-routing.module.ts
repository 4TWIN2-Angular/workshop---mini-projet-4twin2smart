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
import { AddUniversityComponent } from './university/adduniversity/adduniversity.component';
import { listUniversityComponent } from './university/list-university/list-university.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
const routes: Routes = [
  {path:'listmembres',component:TablemembreComponent,},
  {path:'add',component:AddmembreComponent},
  {path:'addUniv',component:AddUniversityComponent},
  {path:'sponsor',   loadChildren: () => import('./sponsor/sponsor.module').then(m => m.SponsorModule)
},

{path: '', redirectTo:'Dashbord' , pathMatch:'full' },
{path:'addUniv',component:AddUniversityComponent},
{path:'ListUniv',component:listUniversityComponent},
{path:'UpdateUniversity/:UnivId',component:UpdateUniversityComponent},
{path:'DetailsUniversity/:UnivId',component:DetailsUniversityComponent},

  {path:'university', children:[
    {path:'DetailsUniversity/:UnivId', component: DetailsUniversityComponent},
    {path:'ListUniv',component:listUniversityComponent},
  ]
  },
  // {path:'listuniversity',   loadChildren: () => import('./listuniversity/ListUniversity.Module').then(u => u.University)}

{path:'',loadChildren:()=>import('./event/listevent/listevent.module').then(m=>m.ListeventModule)},
{path:'addevent',component:AddeventComponent},
{path:'event',component:EventComponent},
{path:'eventdelete',component:EventdeleteComponent},
{path:'updateevent/:id_E',component:EventupdateComponent},
{ path: 'club', loadChildren: () => import('./club/club.module').then(m => m.ClubModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
