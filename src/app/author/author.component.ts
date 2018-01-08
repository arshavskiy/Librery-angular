import {Component, OnInit} from '@angular/core';
import {Authors} from "../authors"
import {AuthorService} from "../author.service";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  selectedAuthor: string = '';
  selectAtr: Authors[];

  onSelect(a) {
    this.selectedAuthor = a;
    console.log(this.selectedAuthor);

  }

  getAuthors(): void {
    this.selectAtr = this.authorService.getAllAuthors()
  }

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.getAuthors();
  }

}
