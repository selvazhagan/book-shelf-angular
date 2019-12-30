import { Component, OnInit } from '@angular/core';
import { BooksService } from './service/books.service';
import { Book } from './model/book';
import { Store } from '@ngrx/store';
import * as BooksAction from './store/books.action';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookItems = [];
  filterPageNumber: number;

  sortedBookByAuthor = [];
  sortedBookByPages = [];
  sortedBookByReleaseDate = [];

  constructor(
    public bookservice: BooksService,
    private store: Store<{
      books: Book[];
    }>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new BooksAction.LoadBooks());
    this.store.select('books').subscribe(data => {
      this.bookItems = data['books'];
    });
  }

  filterbyPages(value) {
    this.filterPageNumber = +value;
  }

  sortByOption(value) {
    this.store.select('books').subscribe(data => {
      switch (value) {
        case 'author':
          if (this.sortedBookByAuthor.length < 1) {
            this.sortedBookByAuthor = data['books']
              .slice()
              .sort(this.sortByName);
            this.bookItems = this.sortedBookByAuthor;
          } else {
            this.bookItems = this.sortedBookByAuthor;
          }
          return this.bookItems;
        case 'releaseDate':
          if (this.sortedBookByReleaseDate.length < 1) {
            this.sortedBookByReleaseDate = data['books']
              .slice()
              .sort(this.sortByReleaseDate);
            this.bookItems = this.sortedBookByReleaseDate;
          } else {
            this.bookItems = this.sortedBookByReleaseDate;
          }
          return this.bookItems;
        default:
          if (this.sortedBookByPages.length < 1) {
            this.sortedBookByPages = data['books']
              .slice()
              .sort(this.sortByPages);
            this.bookItems = this.sortedBookByPages;
          } else {
            this.bookItems = this.sortedBookByPages;
          }
          return this.bookItems;
      }
    });
  }

  trackByFunction(index, bookItem: Book): any {
    return bookItem.link;
  }

  sortByName(book1, book2) {
    if (book2.author > book1.author) {
      return -1;
    } else if (book2.author < book1.author) {
      return 1;
    }
    return 0;
  }

  sortByPages(book1, book2) {
    return book1.pages - book2.pages;
  }

  sortByReleaseDate(book1, book2) {
    if (
      !book2.releaseDate ||
      !book1.releaseDate ||
      book2.releaseDate.split('/').length < 2 ||
      book1.releaseDate.split('/').length < 2
    ) {
      return 0;
    }
    const startDate = new Date(
      book1.releaseDate.split('/')[1],
      book1.releaseDate.split('/')[0],
    );
    const endDate = new Date(
      book2.releaseDate.split('/')[1],
      book2.releaseDate.split('/')[0],
    );
    const prevTime = startDate.getTime();
    const currentTime = endDate.getTime();
    if (prevTime < currentTime) {
      return -1;
    }
    if (prevTime === currentTime) {
      return 0;
    }
    return 1;
  }
}
