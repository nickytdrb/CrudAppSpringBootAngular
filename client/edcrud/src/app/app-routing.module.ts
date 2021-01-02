import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: 'users', component: UserTableComponent },
  // o,ti vazw meta to path einai auto pou emfanizetai sto url
  { path: 'new-user', component: NewUserComponent },
  { path: '', redirectTo: 'users', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }