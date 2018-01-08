import { Injectable } from '@angular/core';
import { AllAUTHORS } from "./mock-authors"

@Injectable()
export class AuthorService {

  getAllAuthors(){
    return AllAUTHORS;
  }

  constructor() { }

}
