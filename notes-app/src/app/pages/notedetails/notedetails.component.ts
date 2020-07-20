import { NotesService } from './../../shared/notes.service';
import { Note } from './../../shared/note-model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notedetails',
  templateUrl: './notedetails.component.html',
  styleUrls: ['./notedetails.component.scss']
})
export class NotedetailsComponent implements OnInit {

  note:Note
  noteId:number
  new:boolean

  constructor(private notesService:NotesService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((param:Params)=>{
      this.note=new Note()
      if(param.id){
        this.note=this.notesService.get(param.id)
        this.noteId=param.id 
        this.new=false
      }
      else{
        this.new=true
      }
    })
    
  }

  onSubmit(form:NgForm){
      //Save the form
      if(this.new){
        this.notesService.add(form.value)
      }
      else{
        this.notesService.update(this.noteId,form.value.title,form.value.body)
      }
      this.router.navigateByUrl('/')

  }

  cancel(){
    this.router.navigateByUrl('/')
  }

}
