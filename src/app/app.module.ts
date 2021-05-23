import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsModule } from './modules/accounts/accounts.module';
import { ClientsModule } from './modules/clients/clients.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './sharedModules/material.module';
import { BarraLateralComponent } from './sharedModules/barra-lateral/barra-lateral.component';
import { TableComponent } from './sharedModules/table/table.component';






@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    
    //AccountsModule,
    //ClientsModule
    
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
