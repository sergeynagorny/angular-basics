import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  inputValue = ''

  onInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }
}


