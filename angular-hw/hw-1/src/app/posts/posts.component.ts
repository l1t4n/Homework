import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  public topic = "Personal Blog";
  public isVisible = false;
  public isDisabled = false;

  private posts = [
    {
      id: 0,
      title: "Here is a first post in the blog.",
      description: "Description of the current post."
    },
    {
      id: 1,
      title: "Here is a second post in the blog.",
      description: "Description of the current post."      
    },
    {
      id: 2,
      title: "Here is a third post in the blog.",
      description: "Description of the current post."
    }
  ];

  public setVisibility() {
    this.isVisible = !this.isVisible;
    this.isDisabled = true;
  }

  public getAllPosts() {
    return this.posts;
  }

  constructor() {}
}
