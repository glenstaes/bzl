import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsRootComponent } from './students-root/students-root.component';

/**
 * The routes for the students section of the application.
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', component: StudentsRootComponent }
];

/**
 * This module represents the students section routing.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
