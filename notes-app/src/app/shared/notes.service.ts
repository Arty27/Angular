import { Note } from './note-model';
import { Injectable } from '@angular/core';
import { notStrictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes:Note[]=new Array<Note>();
  constructor() { }

  get(id:number){
    return this.notes[id]
  }

  getId(note:Note){
    return this.notes.indexOf(note)
  }

  getAll(){
    return this.notes
  }

  add(note:Note){
    //this method will add note and return its index as id
    let newlenght=this.notes.push(note);
    let index=newlenght-1;
    return index;
  }

  update(id:number,title:string,body:string){
    let note=this.notes[id]
    note.title=title;
    note.body=body
  }

  delete(id:number){
    this.notes.splice(id,1)
  }
}
