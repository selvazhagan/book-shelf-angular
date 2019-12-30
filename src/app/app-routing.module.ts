import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-shelf/books',
    pathMatch: 'full',
  },
  {
    path: 'book-shelf',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule),
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
