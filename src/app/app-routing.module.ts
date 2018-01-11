import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author/author.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'Authors', component: AuthorComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
