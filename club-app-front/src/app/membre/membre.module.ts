
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreRoutingModule } from './membre-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MailComponent } from './mail/mail.component';
import { DetailmembreComponent } from './detailmembre/detailmembre.component';
import { AddmembreComponent } from './addmembre/addmembre.component';

import {HttpClientModule} from '@angular/common/http';
import { TablemembreComponent } from './tablemembre/tablemembre.component';
import { PipemembrePipe } from './pipemembre.pipe';
import { DeletemodalComponent } from './deletemodal/deletemodal.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    MailComponent,
    DetailmembreComponent,
    DeletemodalComponent,
    AddmembreComponent,
    DetailmembreComponent,
    TablemembreComponent,
    PipemembrePipe,
    DeletemodalComponent,
    TestComponent



  ],
  imports: [
    CommonModule,
    MembreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
    
  ]

})
export class MembreModule { }
