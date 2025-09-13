import { Component } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  citations?: string[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Ethical AI: Why It Matters in 2025',
      date: 'September 3, 2025',
      content: `Artificial Intelligence is transforming industries, but ethical considerations are more important than ever. In this post, we explore the key challenges and solutions for building responsible AI systems, referencing the Multiverse 2025 AI Skills Report and recent interviews.\n\nKey topics include bias mitigation, transparency, and the role of regulation in shaping the future of AI. Practical tips for developers and organizations are provided.`,
      citations: [
        'Multiverse 2025 AI Skills Report',
        'Al Mayadeen Interview with Jihad Ftouny'
      ]
    }
  ];
}
