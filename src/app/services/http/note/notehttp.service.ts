import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotehttpService {
  
  url:string='https://localhost:7072/api/note';
  constructor(private httpclient:HttpClient) { }

  addNote(note: { title: any; description: any; isArchived: boolean; colour: string; }):Observable<any> {
    return this.httpclient.post(`${this.url}`,note);
  }

  getAllNotes():Observable<any>{
    return this.httpclient.get(this.url);
  }

  moveToTrash(noteId: string):Observable<any> {
    return this.httpclient.put(`${this.url}/${noteId}/trash`,{});
  }

  addToArchive(noteId: string):Observable<any> {
    return this.httpclient.put(`${this.url}/${noteId}/archive`,{});
  }

  deleteNote(noteId: string):Observable<any> {
    return this.httpclient.delete(`${this.url}/${noteId}`);
  }

  AddColorToNote(colorModule: { noteId: string; colour: string; }):Observable<any> {
    return this.httpclient.put(`${this.url}/color`,colorModule);
  }
}
