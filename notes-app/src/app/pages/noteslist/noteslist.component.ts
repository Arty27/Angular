import { NotesService } from './../../shared/notes.service';
import { Note } from './../../shared/note-model';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss'],
  animations:[
    trigger('itemAnim', [
      // ENTRY ANIMATION
      transition('void => *', [
        // Initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          // we have to 'expand' out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        // we first want to animate the spacing (which includes height and margin)
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(68)
      ])
  ])
]
})
export class NoteslistComponent implements OnInit {

  notes:Note[]=new Array<Note>()

  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.notes=this.notesService.getAll()
  }

  deleteNote(id:number){
    this.notesService.delete(id)
  }

}
