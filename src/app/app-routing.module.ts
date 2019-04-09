import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Contains the main route segments of the applications.
 * Lazy loads segments where possible.
 */
const routes: Routes = [
  { path: 'students', loadChildren: './students/students.module#StudentsModule' },
  { path: '', pathMatch: 'full', redirectTo: '/students' }
];

/**
 * This module represents the main routing module of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
