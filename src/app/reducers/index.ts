import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as booksReducer from '../book/store/books.reducer';

export interface State {
  books: booksReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  books: booksReducer.booksReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
