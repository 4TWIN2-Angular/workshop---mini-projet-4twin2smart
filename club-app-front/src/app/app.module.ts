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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
