import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteFormComponent implements OnInit {
  noteForm! : FormGroup;
  isActive: boolean = false;
  isArchived : boolean = false;
  hasActivated: boolean = false;
  colour:string='';
  constructor(
    private dialog: MatDialog,
    private formBuilder:FormBuilder,
    private noteService : NoteService
  ) {}
  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: [''],
      description: ['']
    });
  }

  openDialog() {
    this.dialog.open(CollaboratorsComponent);
  }

  onActive(): void {
    // Activate the form only on the first click
    if (!this.hasActivated) {
      this.isActive = true;
      this.hasActivated = true;
    }
  }

  recievData(colour: string) {
     this.colour = colour;
  }

  addNote(event: Event): void {
    // Prevent click event from propagating to the parent
    event.stopPropagation();
    let note = {
      title : this.noteForm.value.title,
      description : this.noteForm.value.description,
      isArchived : this.isArchived ,
      colour:this.colour
    }
    this.noteService.addNote(note).subscribe(
      (data)=>{
        console.log(data);
      }
    );
    // Collapse the form and reset hasActivated flag
    this.isActive = false;
    this.hasActivated = false;
    console.log('Note closed:', this.isActive);
  }
}
