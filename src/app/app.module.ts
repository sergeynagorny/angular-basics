import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCounterService } from './services/app-counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [AppCounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
