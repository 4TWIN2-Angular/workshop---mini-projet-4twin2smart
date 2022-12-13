import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { UniversityComponent } from './university/university.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUniversityComponent } from './university/list-university/list-university.component';

import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { DeletUniversityComponent } from './university/delet-university/delet-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeuniversityPipe } from './university/pipeuniversity.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UniversityComponent,
    ListUniversityComponent,
    UpdateUniversityComponent,
    DeletUniversityComponent,
    DetailsUniversityComponent,
    PageNotFoundComponent,
    ListUniversityComponent,
    AddUniversityComponent,
    PipeuniversityPipe
    
    
    //ListUniversityComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
