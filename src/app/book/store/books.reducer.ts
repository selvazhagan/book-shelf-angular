import { Book } from '../model/book';
import * as BooksActions from './books.action';

export interface State {
  books: Book[];
}

const initialState: State = {
  books: [],
};

export function booksReducer(
  state = initialState,
  action: BooksActions.BooksActions,
) {
  switch (action.type) {
    case BooksActions.SET_BOOKS:
      return {
        ...state,
        books: [...action.payload],
      };
    default:
      return state;
  }
}
