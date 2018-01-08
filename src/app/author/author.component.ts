import { Component, OnInit } from '@angular/core';
import { AllAUTHORS } from "../mock-authors"


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  selectedAuthor : string = '';
  selectAtr = AllAUTHORS;

  onSelect(a) {
    this.selectedAuthor = a;
    console.log(this.selectedAuthor);

  }

  constructor() { }

  ngOnInit() {
  }

}
