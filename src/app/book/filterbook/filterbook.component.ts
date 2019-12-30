import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filterbook',
  templateUrl: './filterbook.component.html',
  styleUrls: ['./filterbook.component.scss'],
})
export class FilterbookComponent implements OnInit {
  filterForm = new FormGroup({
    searchByPages: new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]),
  });

  @Output() filterNumberOfPages = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  filterPages() {
    this.filterNumberOfPages.emit(this.filterForm.value.searchByPages);
  }
}
