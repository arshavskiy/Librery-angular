import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"


import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {AuthorService} from "./author.service";


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
