import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';

@NgModule({
  declarations: [
    TimetableListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TimetableListComponent]
})
export class AppModule { }
