import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MembreComponent } from './membre/membre.component';
import { TablemembreComponent } from './membre/tablemembre/tablemembre.component';
import {HttpClientModule} from '@angular/common/http';
import { AddmembreComponent } from './membre/addmembre/addmembre.component';
import { FormsModule } from '@angular/forms';
import { PipemembrePipe } from './membre/pipemembre.pipe';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ClubComponent } from './club/club.component';
import { EventComponent } from './event/event.component';



import { AddeventComponent } from './event/addevent/addevent.component';
import { EventupdateComponent } from './event/eventupdate/eventupdate.component';
import { EventdeleteComponent } from './event/eventdelete/eventdelete.component';

import { ReactiveFormsModule } from '@angular/forms';

import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './university/adduniversity/adduniversity.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { ListUniversityModule } from './university/list-university/list-university.module';
import{SimpleNotificationsModule} from 'angular2-notifications'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletUniversityComponent } from './university/delet-university/delet-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
import { listUniversityComponent } from './university/list-university/list-university.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SponsorComponent,
    MembreComponent,
    TablemembreComponent,
    AddmembreComponent,
    PipemembrePipe,
    SponsorComponent,
    EventComponent,
    AddeventComponent,
    EventupdateComponent,
    EventdeleteComponent,
    UniversityComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    DeletUniversityComponent,
    DetailsUniversityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    ListUniversityModule

 
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
