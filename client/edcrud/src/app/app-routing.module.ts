import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: 'users', component: UserTableComponent },
  { path: '', redirectTo: 'users', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
