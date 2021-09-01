import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(private router: Router, private route: ActivatedRoute, public postsService: PostsService) {}

  ngOnInit(): void {
    this.showIdsByRoute();
  }

  showIdsByRoute() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = params.showIds === 'true';
    });
  }

  showIdsByProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: !this.showIds,
      },
    });
  }
}
