import { booksReducer, State } from './books.reducer';
import { SET_BOOKS, SetBooks, AddBooks } from './books.action';

describe('Books Reducer', () => {
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

  let initialState: State;

  it('booksReducer set books case', () => {
    initialState = {
      books: [],
    };
    const booksReducerTest = booksReducer(
      initialState,
      new SetBooks(booksItem),
    );
    expect(booksReducerTest.books.length).toEqual(7);
  });

  it('booksReducer action books case', () => {
    const booksReducerTest = booksReducer(
      initialState,
      new SetBooks(booksItem),
    );
    expect(booksReducerTest.books.length).toEqual(7);
  });

  it('booksReducer action books case', () => {
    const booksReducerTest = booksReducer(
      initialState,
      new AddBooks(booksItem),
    );
    expect(booksReducerTest.books.length).toEqual(0);
  });
});
