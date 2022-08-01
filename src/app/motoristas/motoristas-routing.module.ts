import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'motoristas', redirectTo: 'motoristas/index', pathMatch: 'full'},
  { path: 'motoristas/index', component: IndexComponent },
  { path: 'motoristas/create', component: CreateComponent },
  { path: 'motoristas/edit/:idMotoristas', component: EditComponent }
];
