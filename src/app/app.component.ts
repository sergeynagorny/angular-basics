import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Title1',
      text: 'Text1',
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
