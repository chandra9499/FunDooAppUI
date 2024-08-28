import { Observable, Subscriber } from 'rxjs';
import { NotehttpService} from '../http/note/notehttp.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  constructor(private noteService:NotehttpService) { }

  addNote(note: { title: any; description: any; isArchived: boolean; colour: string; }):Observable<any> {
    return this.noteService.addNote(note);
  }

  getAllNotes():Observable<any>{
    return this.noteService.getAllNotes();
  }

  moveToTrash(noteId: string):Observable<any> {
    return this.noteService.moveToTrash(noteId);
  }

  addToArchive(noteId: string):Observable<any> {
    return this.noteService.addToArchive(noteId);
  }

  deleteNote(noteId: string):Observable<any> {
    return this.noteService.deleteNote(noteId);
  }

  AddColorToNote(colorModule: { noteId: string; colour: string; }):Observable<any>  {
    return this.noteService.AddColorToNote(colorModule);
  }
}
