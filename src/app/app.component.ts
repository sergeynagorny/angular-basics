import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  p: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Promise Resolved'), 4000);
  });
}
