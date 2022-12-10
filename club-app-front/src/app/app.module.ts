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
<<<<<<< HEAD
import { EventComponent } from './event/event.component';



import { AddeventComponent } from './event/addevent/addevent.component';
import { EventupdateComponent } from './event/eventupdate/eventupdate.component';
import { EventdeleteComponent } from './event/eventdelete/eventdelete.component';

import { ReactiveFormsModule } from '@angular/forms';

=======
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './university/adduniversity/adduniversity.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';
>>>>>>> 2ed4ec563f4c00403568e0d2b6f157bcd8e5177f

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MembreComponent,
    TablemembreComponent,
    AddmembreComponent,
    PipemembrePipe,
    SponsorComponent,
<<<<<<< HEAD
    EventComponent,

    AddeventComponent,
    EventupdateComponent,
    EventdeleteComponent,
    
    
   
    
=======
    UniversityComponent,
    AddUniversityComponent,
    UpdateUniversityComponent
>>>>>>> 2ed4ec563f4c00403568e0d2b6f157bcd8e5177f
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
