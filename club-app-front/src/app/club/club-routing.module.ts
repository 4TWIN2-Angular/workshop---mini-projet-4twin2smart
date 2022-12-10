import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubAddComponent } from './club-add/club-add.component';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubComponent } from './club.component';
import { DetailclubComponent } from './detailclub/detailclub.component';

const routes: Routes = [{ path: '', component: ClubComponent,children:[
  
    { path: 'addClub', component: ClubAddComponent },
    { path: 'updateClub/:id', component: ClubAddComponent },
    { path: 'listClub', component: ClubListComponent},
    { path: 'detailClub', component: DetailclubComponent },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
