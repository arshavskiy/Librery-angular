import { Component, OnInit } from '@angular/core';
// import { Authors} from "../authors";
import { AllAUTHORS } from "../mock-authors"


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  selectAtr = AllAUTHORS;

  // selectedHero: Hero;

  onSelect(a) {
    this.selectAtr = a;
  }


  // author : Authors = {
  //   id:1,
  //   name: 'Arshavsky Pavel',
  //   books : [
  //     {'id':10, 'name':'1000 Tales of Arabiya', 'pages': 344},
  //     {'id':11, 'name':'Doggy Days', 'pages': 122}
  //   ]
  // }

  constructor() { }

  ngOnInit() {
  }

}
