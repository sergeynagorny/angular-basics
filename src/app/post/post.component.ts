import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post; // [post]="p"
  // @Input('myPost') post!: Post; // переопределяем название пропса [myPost]="p"

  constructor() {}

  ngOnInit(): void {}
}
