import { LazyLoadImagesDirective } from './lazy-load-images.directive';
import { TestBed } from '@angular/core/testing';
import { BookItemComponent } from './book-item/book-item.component';
import { DebugElement } from '@angular/core';

describe('LazyLoadImagesDirective', () => {
  let fixture;
  let component: BookItemComponent;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookItemComponent, LazyLoadImagesDirective],
    });
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
    inputEl = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new LazyLoadImagesDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  it('ngAfterViewInit for directive', () => {
    const directive = new LazyLoadImagesDirective(inputEl);
    spyOn(directive, 'canLazyLoad').and.returnValue(false);
    directive.ngAfterViewInit();
    expect(directive).toBeTruthy();
  });

  it('ngAfterViewInit for directive', () => {
    inputEl = fixture.debugElement.childNodes[0].childNodes[0].childNodes[0];
    const directive = new LazyLoadImagesDirective(inputEl);
    spyOn(directive, 'canLazyLoad').and.returnValue(true);
    directive.ngAfterViewInit();
    expect(directive).toBeTruthy();
  });
});
