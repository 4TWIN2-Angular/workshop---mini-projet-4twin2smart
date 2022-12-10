import { SponsorComponent } from './sponsor/sponsor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmembreComponent } from './membre/addmembre/addmembre.component';
import { TablemembreComponent } from './membre/tablemembre/tablemembre.component';
<<<<<<< HEAD
import { EventComponent } from './event/event.component';

import { AddeventComponent } from './event/addevent/addevent.component';
import { EventupdateComponent } from './event/eventupdate/eventupdate.component';
import { EventdeleteComponent } from './event/eventdelete/eventdelete.component';

=======
import { AddUniversityComponent } from './university/adduniversity/adduniversity.component';
>>>>>>> 2ed4ec563f4c00403568e0d2b6f157bcd8e5177f

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path:'listmembres',component:TablemembreComponent,},
  {path:'add',component:AddmembreComponent},
  {path:'addUniv',component:AddUniversityComponent},
  {path:'sponsor',   loadChildren: () => import('./sponsor/sponsor.module').then(m => m.SponsorModule)
},
{path:'',loadChildren:()=>import('./event/listevent/listevent.module').then(m=>m.ListeventModule)},
{path:'addevent',component:AddeventComponent},
{path:'event',component:EventComponent},
{path:'eventdelete',component:EventdeleteComponent},
{path:'updateevent/:id_E',component:EventupdateComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
