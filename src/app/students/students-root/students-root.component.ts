import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StudentsSettingsDialogComponent } from '../students-settings-dialog/students-settings-dialog.component';

/**
 * This component is the landing page when entering the students section.
 * It provides an overview of the available courses for the student.
 */
@Component({
  selector: 'bzl-students-root',
  templateUrl: './students-root.component.html',
  styleUrls: ['./students-root.component.scss']
})
export class StudentsRootComponent {
  /** The theme that should be applied to the user interface. */
  theme = "theme-1";

  /**
   * Creates a new instance of the component.
   * @param _matDialog The dialog service of Angular Material.
   */
  constructor(
    private _matDialog: MatDialog
  ) { }

  /**
   * Opens the settings dialog.
   * The result that is received from the dialog is the selected theme.
   */
  openSettingsDialog() {
    var dialogRef = this._matDialog.open(StudentsSettingsDialogComponent);

    dialogRef.afterClosed().subscribe((newTheme) => {
      if (newTheme) {
        this.theme = newTheme;
      }
    });
  }
}
