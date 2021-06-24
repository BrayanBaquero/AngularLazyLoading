import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './sharedModules/dashboard/dashboard.component';
import { FormComponent } from './sharedModules/form/form.component';
import { PruebaComponent } from './sharedModules/prueba/prueba.component';
import { TableComponent } from './sharedModules/table/table.component';
import { TreeComponent } from './sharedModules/tree/tree.component';

const routes: Routes = [
  {
    path:'home',
    //loadChildren:'./modules/clients/clients.module#ClientsModule'
    loadChildren:()=> import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'clients',
    //loadChildren:'./modules/clients/clients.module#ClientsModule'
    loadChildren:()=> import('./modules/clients/clients.module').then(m=>m.ClientsModule)
  },
  {
    path:'accounts',
    //loadChildren:'./modules/accounts/accounts.module#AccountsModule'
    loadChildren:()=> import('./modules/accounts/accounts.module').then(m=>m.AccountsModule)
  },
  {path:'table',component:TableComponent},
  {path:'form',component:FormComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tree',component:TreeComponent},
  {path:'prueba',component:PruebaComponent}
  //{path: '**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
