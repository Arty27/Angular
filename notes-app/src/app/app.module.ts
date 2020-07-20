import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NotecardComponent } from './notecard/notecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotedetailsComponent } from './pages/notedetails/notedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    MainlayoutComponent,
    NotecardComponent,
    NotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
