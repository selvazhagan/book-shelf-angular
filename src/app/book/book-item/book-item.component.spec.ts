import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    component.bookitem = {
      cover: {
        large: 'https://covers.oreillystatic.com/images/9780596517748/lrg.jpg',
        small: 'https://covers.oreillystatic.com/images/9780596517748/cat.gif',
      },
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      releaseDate: '12/2008',
      pages: 172,
      link: 'http://shop.oreilly.com/product/9780596517748.do',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clickBook method called', () => {
    const bookImPath =
      'https://covers.oreillystatic.com/images/9780596517748/lrg.jpg';
    component.clickBook(bookImPath, 'JavaScript: The Good Parts');
    expect(component.selectedBookImg).toEqual(bookImPath);
  });

  it('closeDialog method called', () => {
    component.closeDialog();
    expect(component.popUpOpen).toBeFalsy();
  });
});
