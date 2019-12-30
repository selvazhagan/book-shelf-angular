import { SetBooks, SET_BOOKS, AddBooks, ADD_BOOKS } from './books.action';

describe('BooksAction', () => {
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
  it('set book Action', () => {
    const books = new SetBooks(booksItem);
    expect(books.type).toBe(SET_BOOKS);
  });

  it('set book Action', () => {
    const books = new AddBooks(booksItem);
    expect(books.type).toBe(ADD_BOOKS);
  });
});
