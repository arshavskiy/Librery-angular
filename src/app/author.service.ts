import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AllAUTHORS } from './mock-authors';
import {Authors} from './authors';

@Injectable()
export class AuthorService {

  // getAllAuthors() {
  //   return AllAUTHORS;
  // }

  getAllAuthors(): Observable<Authors[]> {
    return of(AllAUTHORS);
  }

  constructor() { }

}
