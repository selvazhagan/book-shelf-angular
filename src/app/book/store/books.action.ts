import { Action } from '@ngrx/store';
import { Book } from '../model/book';

export const SET_BOOKS = '[Books] Set Books';
export const LOAD_BOOKS = '[Books] Load Books';
export const ADD_BOOKS = '[Books] Add Books';

export class SetBooks implements Action {
  readonly type: string = SET_BOOKS;

  constructor(public payload: Book[]) {}
}

export class LoadBooks implements Action {
  readonly type: string = LOAD_BOOKS;
}

export class AddBooks implements Action {
  readonly type: string = ADD_BOOKS;

  constructor(public payload: Book[]) {}
}

export type BooksActions = SetBooks | AddBooks;
