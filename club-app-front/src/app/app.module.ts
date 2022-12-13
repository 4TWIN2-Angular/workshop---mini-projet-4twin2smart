import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MembreComponent } from './membre/membre.component';
import { TablemembreComponent } from './membre/tablemembre/tablemembre.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmembreComponent } from './membre/addmembre/addmembre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipemembrePipe } from './membre/pipemembre.pipe';
import { SponsorComponent } from './sponsor/sponsor.component';
import { EventComponent } from './event/event.component';



import { AddeventComponent } from './event/addevent/addevent.component';
import { EventupdateComponent } from './event/eventupdate/eventupdate.component';
import { EventdeleteComponent } from './event/eventdelete/eventdelete.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './university/adduniversity/adduniversity.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SponsorComponent,
    MembreComponent,
    SponsorComponent,
    SponsorComponent,
    EventComponent,
    AddeventComponent,
    EventupdateComponent,
    EventdeleteComponent,
    UniversityComponent,
    AddUniversityComponent,
    UpdateUniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
