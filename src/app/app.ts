import { Component, signal } from '@angular/core';
import { PostsService } from './services/posts.service';
import { NgFor } from '@angular/common';

@Component({
  imports: [NgFor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial-pm');

  constructor(private postsService: PostsService) {}

  postsList: any;
  ngOnInit() {
    this.postsService.getPostsList().subscribe((response) => {
      this.postsList = response;
    });
  }
}
