import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

import { StudentsRootComponent } from './students-root/students-root.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsSettingsDialogComponent } from './students-settings-dialog/students-settings-dialog.component';

/**
 * This module represents the students section of the application.
 * It is lazy loaded by the main application module routes.
 */
@NgModule({
  declarations: [StudentsRootComponent, StudentsSettingsDialogComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [StudentsSettingsDialogComponent]
})
export class StudentsModule { }
