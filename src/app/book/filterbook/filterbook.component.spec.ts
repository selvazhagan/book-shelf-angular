import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbookComponent } from './filterbook.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FilterbookComponent', () => {
  let component: FilterbookComponent;
  let fixture: ComponentFixture<FilterbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterbookComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if the form control is valid', () => {
    component.filterForm.setValue({
      searchByPages: 123,
    });
    expect(component.filterForm.valid).toBe(true);
  });

  it('should return flase if the form control is not valid', () => {
    component.filterForm.setValue({
      searchByPages: '',
    });
    expect(component.filterForm.valid).toBe(false);
  });

  it('call filterPageMethod to send number of pages to parent', () => {
    component.filterForm.setValue({
      searchByPages: 123,
    });
    component.filterNumberOfPages.subscribe(data => {
      expect(data).toBe(123);
    });
    component.filterPages();
  });
});
