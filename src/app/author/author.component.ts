import {Component, OnInit} from '@angular/core';
import {Authors} from "../authors"
import {AuthorService} from "../author.service";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  selectedAuthor:  string[] = [];
  selectAtr: Authors[];

  onSelect(a) {
    this.selectedAuthor = a;
    console.log(this.selectedAuthor);

  }

  // getAuthors() {
  //   this.selectAtr = this.authorService.getAllAuthors();
  // }

  getAuthors(): void {
    this.authorService.getAllAuthors()
      .subscribe(selectAtr => this.selectAtr = selectAtr);
  }

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.getAuthors();
  }

}
