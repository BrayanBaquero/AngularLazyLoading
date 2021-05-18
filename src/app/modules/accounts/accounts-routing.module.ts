import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'viewaccounts',component:ViewAccountComponent},
      {path:'addAccount',component:AddAccountComponent},
      {path:'editAccount',component:EditAccountComponent}
     // {path:'**',component:ViewAccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
