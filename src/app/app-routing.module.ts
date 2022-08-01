import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './motoristas/index/index.component';
import { CreateComponent } from './motoristas/create/create.component';
import { EditComponent } from './motoristas/edit/edit.component';

const routes: Routes = [
  { path: 'motoristass', redirectTo: 'motoristas/index', pathMatch: 'full'},
  { path: 'motoristas/index', component: IndexComponent },
  { path: 'motoristas/create', component: CreateComponent },
  { path: 'motoristas/edit/:idMotoristas', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
