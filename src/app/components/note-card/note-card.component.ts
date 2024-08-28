import { NoteService } from './../../services/note/note.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';
import { Observable, Subscriber } from 'rxjs';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteCardComponent implements OnInit ,OnChanges {
  constructor(
    private dialog:MatDialog,
    private noteService:NoteService,
    private router:Router
  ){}
  @Input() isArchived: boolean = false;
  @Input() isTrash: boolean = false;
  
  allnotes: Array<any> = [];
  filteredNotes: Array<any> = [];

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(data => {
      console.log(data);
      this.allnotes = data;
      this.applyFilters(); 
      console.log(this.filteredNotes);
      console.log(this.filteredNotes.length);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {   
      this.applyFilters();
  }

  applyFilters(): void {
    console.log(this.isArchived);
    console.log(this.isTrash);
    this.filteredNotes = this.allnotes.filter(note => {
      const isNoteArchived = note.isArchived === true;
      const isNoteTrash = note.isDeleted === true; 

      if (this.isArchived && !this.isTrash) {
        return isNoteArchived; 
      } else if (this.isTrash && !this.isArchived) {
        return isNoteTrash; 
      } else if (!this.isArchived && !this.isTrash) {
        return !isNoteArchived && !isNoteTrash; 
      } else {
        return false; 
      }
    });
  }

  openCollaboratorsDialog() {
    this.dialog.open(CollaboratorsComponent, {
      width: '400px',
      height: '300px',
    });
  }
  notes: any = [
    { title: 'Note 1', text: 'This is the first note' },
    { title: 'Note 2', text: '' },
    { title: 'Note 3', text: 'This is the third note' }
    // You can add more notes here or fetch them from a service
  ];
  
  getAllNotes():void{
    this.noteService.getAllNotes().subscribe(data=>{
      console.log(data);
    });
  }
  @Input()
  itemview: boolean = false;
  openDialog(noteId:string){
    this.dialog.open(CollaboratorsComponent);
  }
  openDialogNotes(){
    this.dialog.open(NoteCardComponent);
  }

  addToTrash(noteId: string,event:Event) {
    // debugger;
    console.log(noteId);
    event.stopPropagation();
    this.noteService.moveToTrash(noteId).subscribe(
      (data) => {
        console.log('Note moved to trash:', data);
        // Handle successful response
        this.filteredNotes = this.filteredNotes.filter(note => note.noteId !== noteId);
        this.router.navigateByUrl("/dashbord");
      }
    );
  }

  archiveNote(noteId: string,event:Event) {
    event.stopPropagation();
     this.noteService.addToArchive(noteId).subscribe(
      (data)=>{
        console.log('Note moved to archive:', data);
        // Handle successful response
        this.filteredNotes = this.filteredNotes.filter(note => note.noteId !== noteId);
        this.router.navigateByUrl("/dashbord");
      }
    );
  }

  ondelete(noteId:string,event:Event) {
    event.stopPropagation();
    this.noteService.deleteNote(noteId).subscribe(
      (data)=>{
        this.filteredNotes = this.filteredNotes.filter(
          note=> note.noteId !== noteId
        );
      }
    );
  }

  reciveData(colour:string,noteId:string) {
    
    let module = {
      noteId: noteId,
      colour: colour // Use 'colour' to match the expected request object
    };
    this.noteService.AddColorToNote(module).subscribe(
      (data)=>{
        console.log('the updated color to the note is '+data);
        // this.filteredNotes = th
      }
    );
    console.log(colour + noteId);
  }
}
