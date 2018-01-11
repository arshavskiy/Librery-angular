import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {AllAUTHORS} from './mock-authors';
import {Authors} from './authors';
import {MessageService} from './message.service';

@Injectable()
export class AuthorService {

  // getAllAuthors() {
  //   return AllAUTHORS;
  // }

  // getAllAuthors(): Observable<Authors[]> {
  //   return of(AllAUTHORS);
  // }

  getAllAuthors(): Observable<Authors[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('AllAUTHORS: fetched heroes');
    return of(AllAUTHORS);
  }


  // Modify the constructor with a parameter that declares a private messageService property.
  // Angular will inject the singleton MessageService into that property when it creates the HeroService.

  constructor(private messageService: MessageService) {
  }

}
