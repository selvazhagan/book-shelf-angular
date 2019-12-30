import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  @Output() sortOption = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  selectSortOption(value: string) {
    this.sortOption.emit(value);
  }
}
