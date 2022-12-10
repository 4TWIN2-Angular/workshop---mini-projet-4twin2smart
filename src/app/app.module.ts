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
import { FormsModule } from '@angular/forms';
import { ListUniversityComponent } from './university/list-university/list-university.component';
import { CreatUniversityComponent } from './university/creat-university/creat-university.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';
import { DeletUniversityComponent } from './university/delet-university/delet-university.component';
import { DetailsUniversityComponent } from './university/details-university/details-university.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListUniversityModule } from './university/list-university/list-university.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddUniversityComponent,
    UniversityComponent,
    //ListUniversityComponent,
    CreatUniversityComponent,
    UpdateUniversityComponent,
    DeletUniversityComponent,
    DetailsUniversityComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ListUniversityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
