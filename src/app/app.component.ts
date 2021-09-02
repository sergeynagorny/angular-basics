import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const intervalStream$ = interval(1000);
    intervalStream$.subscribe((value) => {
      console.log(value);
    });
  }
}
