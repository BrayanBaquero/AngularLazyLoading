import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import {ViewClientComponent} from './view-client/view-client.component';
import {ClientsService} from './clients.service';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component'


@NgModule({
  declarations: [
    ViewClientComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  providers:[
    ClientsService
  ]
})
export class ClientsModule { }
