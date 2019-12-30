import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { SortingComponent } from './sorting/sorting.component';
import { FilterbookComponent } from './filterbook/filterbook.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookFilterPipe } from './pipe/book-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImagesDirective } from './lazy-load-images.directive';

@NgModule({
  declarations: [
    BookComponent,
    SortingComponent,
    FilterbookComponent,
    BookItemComponent,
    BookFilterPipe,
    LazyLoadImagesDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, BookRoutingModule],
})
export class BookModule {}
