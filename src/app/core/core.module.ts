import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptors } from './response.interceptor';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PagenotfoundComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
