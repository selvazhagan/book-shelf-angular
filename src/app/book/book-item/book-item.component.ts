import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() bookitem: Book;
  selectedBookImg: string;
  selectedBookTitle: string;
  popUpOpen = false;
  constructor() {}

  ngOnInit() {}

  clickBook(value, title) {
    this.selectedBookImg = value;
    this.selectedBookTitle = title;
    this.popUpOpen = true;
  }

  closeDialog() {
    this.popUpOpen = false;
  }
}
