import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private httpClient: HttpClient) {}

  getPostsList() {
    return this.httpClient.get(this.url);
  }
}
