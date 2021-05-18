import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  //{path: '**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
