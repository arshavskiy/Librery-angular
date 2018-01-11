import { Component, OnInit } from '@angular/core';
import { Authors } from '../Authors';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  author: Authors[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(): void {
    this.authorService.getAllAuthors()
      .subscribe(author => this.author = author.slice(1, 5));
  }
}
