import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog/blog.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() post!: BlogPost;
}
