import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  {path: '',
    children: [
      { path: 'main', component: InitComponent },
      {path: '**',redirectTo:'main'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
