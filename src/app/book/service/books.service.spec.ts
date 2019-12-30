import { Book } from '../model/book';
import { BooksService } from './books.service';
import { of, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('BooksService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let bookService: BooksService;

  const expectedHeroes: Book[] = [
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
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    bookService = new BooksService(httpClientSpy as any);
  });

  it('should return list of books', () => {
    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    bookService.fetchBooks().subscribe(data => {
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      expect(data.length).toEqual(2);
    });
  });
});
