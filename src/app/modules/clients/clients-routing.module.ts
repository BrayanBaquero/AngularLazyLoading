import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ViewClientComponent } from './view-client/view-client.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'viewClient', component: ViewClientComponent },
      {path:'addClient',component:AddClientComponent},
      {path:'editClient',component:EditClientComponent}
     // {path: '**',redirectTo:'viewClient'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
