import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchType: keyof Post = 'title';
  searchValue = '';
  posts: Post[] = [
    {
      title: 'Milk',
      text: 'Some milk',
    },
    {
      title: 'Bread',
      text: 'Some bread',
    },
    {
      title: 'Beer',
      text: 'Some beer',
    },
  ];
}
