import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { BooksService } from '../service/books.service';
import * as BooksAction from './books.action';

@Injectable()
export class BooksEffect {
  constructor(private action$: Actions, private booksService: BooksService) {}

  @Effect()
  loadBooks = createEffect(() =>
    this.action$.pipe(
      ofType(BooksAction.LOAD_BOOKS),
      mergeMap(() =>
        this.booksService.fetchBooks().pipe(
          map(books => {
            return new BooksAction.SetBooks(books);
          }),
        ),
      ),
    ),
  );
}
