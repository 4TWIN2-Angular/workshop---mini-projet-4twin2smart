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
import{SimpleNotificationsModule} from 'angular2-notifications'



import { AddeventComponent } from './event/addevent/addevent.component';
import { EventupdateComponent } from './event/eventupdate/eventupdate.component';
import { EventdeleteComponent } from './event/eventdelete/eventdelete.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { UniversityComponent } from './university/university.component';
import { ListUniversityComponent } from './university/list-university/list-university.component';

import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { DeletUniversityComponent } from './university/delet-university/delet-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipeuniversityPipe } from './university/pipeuniversity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SponsorComponent,
    MembreComponent,
    EventComponent,
    AddeventComponent,
    EventupdateComponent,
    EventdeleteComponent,
    UniversityComponent,
    ListUniversityComponent,
    UpdateUniversityComponent,
    DeletUniversityComponent,
    DetailsUniversityComponent,
    PageNotFoundComponent,
    ListUniversityComponent,
    AddUniversityComponent,
    PipeuniversityPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
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
