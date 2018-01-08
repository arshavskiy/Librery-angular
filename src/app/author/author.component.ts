import { Component, OnInit } from '@angular/core';
// import { Authors} from "../authors";
import { AllAUTHORS } from "../mock-authors"


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  selectedA : string = '';
  selectAtr = AllAUTHORS;

  // selectedHero: Hero;

  onSelect(a) {
    this.selectedA = a;
    console.log(this.selectedA);

  }

  constructor() { }

  ngOnInit() {
  }

}
