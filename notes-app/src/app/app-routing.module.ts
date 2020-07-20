import { NotedetailsComponent } from './pages/notedetails/notedetails.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:MainlayoutComponent, children:[
    {path:'',component:NoteslistComponent},
    {path:'new',component:NotedetailsComponent},
    {path:':id',component:NotedetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
