import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSettingsDialogComponent } from './students-settings-dialog.component';

describe('StudentsSettingsDialogComponent', () => {
  let component: StudentsSettingsDialogComponent;
  let fixture: ComponentFixture<StudentsSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
