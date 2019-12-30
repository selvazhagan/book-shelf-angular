import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { SortingComponent } from './sorting/sorting.component';
import { FilterbookComponent } from './filterbook/filterbook.component';
import { BookItemComponent } from './book-item/book-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFilterPipe } from './pipe/book-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  const testStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
  const booksItem = [
    {
      cover: {
        large: 'https://covers.oreillystatic.com/images/9780596517748/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/9780596517748/cat.gif',
      },
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      releaseDate: '12/2008',
      pages: 172,
      link: 'http://shop.oreilly.com/product/9780596517748.do',
    },
    {
      cover: {
        large: 'https://covers.oreillystatic.com/images/9780596000486/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/9780596000486/cat.gif',
      },
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      releaseDate: '11/2001',
      pages: 936,
      link: 'http://shop.oreilly.com/product/9780596000486.do',
    },
    {
      cover: {
        large: 'https://covers.oreillystatic.com/images/0636920025832/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/0636920025832/cat.gif',
      },
      title: 'Learning JavaScript Design Patterns',
      author: 'Addy Osmani',
      releaseDate: '08/2012',
      pages: 254,
      link: 'http://shop.oreilly.com/product/0636920025832.do',
    },
    {
      cover: {
        large: 'https://covers.oreillystatic.com/images/0636920027713/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/0636920027713/cat.gif',
      },
      title: 'JavaScript Enlightenment',
      author: 'Cody Lindley',
      releaseDate: '12/2012',
      pages: 166,
      link: 'http://shop.oreilly.com/product/0636920027713.do',
    },
    {
      cover: {
        large: 'https://covers.oreillystatic.com/images/0636920033141/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/0636920033141/cat.gif',
      },
      title: 'Programming JavaScript Applications',
      author: 'Eric Elliott',
      releaseDate: '07/2014',
      pages: 254,
      link: 'http://shop.oreilly.com/product/0636920033141.do',
    },
    {
      cover: {
        large: 'https://covers.oreillystatic.com/images/0636920047124/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/0636920047124/cat.gif',
      },
      title: 'Practical Modern JavaScript',
      author: 'Nicolas Bevacqua',
      releaseDate: '07/2017',
      pages: 334,
      link: 'http://shop.oreilly.com/product/0636920047124.do',
    },
    {
      cover: {
        large:
          'https://covers.oreillystatic.com/images/0636920047124/lrg-part2.jpg',
        small:
          'https://covers.oreillystatic.com/images/0636920047124/cat-part2.gif',
      },
      title: 'Practical Modern JavaScript Part2',
      author: 'Nicolas Bevacqua',
      releaseDate: '07/2017',
      pages: 334,
      link: 'http://shop.oreilly.com/product/0636920047124.do',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SortingComponent,
        FilterbookComponent,
        BookItemComponent,
        BookFilterPipe,
        BookComponent,
      ],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [{ provide: Store, useValue: testStore }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    testStore.select.and.returnValue(of(booksItem));

    fixture.detectChanges();
  });

  it('should create component', () => {
    testStore.select.and.returnValue(of(booksItem));
    expect(component).toBeTruthy();
  });

  it('sortByOption method called to sort by author', () => {
    testStore.select.and.returnValue(of({ books: booksItem }));
    component.sortByOption('author');
    expect(component.sortedBookByAuthor[0].pages).toEqual(254);
  });

  it('sortByOption method called to sort by author', () => {
    testStore.select.and.returnValue(of({ books: booksItem }));
    // sort and store in array
    component.sortByOption('author');
    // fetch it from sorted array.
    component.sortByOption('author');
    expect(component.sortedBookByAuthor[0].pages).toEqual(254);
  });

  it('sortByOption method called to sort by pageNumber', () => {
    testStore.select.and.returnValue(of({ books: booksItem }));
    component.sortByOption('pages');
    expect(component.sortedBookByPages[0].pages).toEqual(166);
  });

  it('sortByOption method called to sort by author', () => {
    testStore.select.and.returnValue(of({ books: booksItem }));
    // sort and store in array
    component.sortByOption('pages');
    // fetch it from sorted array.
    component.sortByOption('pages');
    expect(component.sortedBookByPages[0].pages).toEqual(166);
  });

  it('sortByOption method called to sort by releaseDate', () => {
    testStore.select.and.returnValue(of({ books: booksItem }));
    component.sortByOption('releaseDate');
    expect(component.sortedBookByReleaseDate[0].pages).toEqual(936);
  });

  it('sortByOption method called to sort by author', () => {
    testStore.select.and.returnValue(of({ books: booksItem }));
    // sort and store in array
    component.sortByOption('releaseDate');
    // fetch it from sorted array.
    component.sortByOption('releaseDate');
    expect(component.sortedBookByReleaseDate[0].pages).toEqual(936);
  });

  it('filterbyPages method', () => {
    component.filterbyPages(123);
    expect(component.filterPageNumber).toEqual(123);
  });

  it('trackByFunction', () => {
    const results = component.trackByFunction(1, booksItem[0]);
    expect(results).toEqual(booksItem[0].link);
  });
});
