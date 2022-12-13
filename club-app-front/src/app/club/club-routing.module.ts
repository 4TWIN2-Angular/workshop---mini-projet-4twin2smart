import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubAddComponent } from './club-add/club-add.component';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubComponent } from './club.component';
import { ParentListComponent } from './parent-list/parent-list.component';

const routes: Routes = [{ path: '', component: ClubComponent,children:[
  
    { path: 'addClub', component: ClubAddComponent },
    { path: 'updateClub/:id', component: ClubAddComponent },
    { path: 'listClub', component: ParentListComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
