import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultByPipe } from './pipes/mult-by.pipe';

@NgModule({
  declarations: [AppComponent, MultByPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
