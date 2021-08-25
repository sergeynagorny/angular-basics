import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { FormsModule } from '@angular/forms';
import { PostsFilterPipe } from './pipes/posts-filter.pipe';

@NgModule({
  declarations: [AppComponent, MultByPipe, PostsFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
