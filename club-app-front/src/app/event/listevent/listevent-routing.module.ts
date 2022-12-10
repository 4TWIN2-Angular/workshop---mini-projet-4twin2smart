import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeventComponent } from './listevent.component';

const routes: Routes = [
  {path :'listevent',component:ListeventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeventRoutingModule { }
