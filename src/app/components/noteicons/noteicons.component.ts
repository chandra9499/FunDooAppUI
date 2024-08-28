import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss'],
})
export class NoteiconsComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(CollaboratorsComponent);
  }
}
