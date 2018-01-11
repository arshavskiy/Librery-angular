import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {AuthorService} from './author.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BookDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthorService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
