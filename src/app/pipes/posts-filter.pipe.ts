import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'postsFilter',
  pure: false,
})
export class PostsFilterPipe implements PipeTransform {
  transform(
    posts: Post[],
    searchValue: string,
    searchType: keyof Post = 'title'
  ): Post[] {
    if (!searchValue.trim()) return posts;

    return posts.filter((post) =>
      post[searchType].toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
